import { prisma } from "prisma/db";

import type { z } from "zod";
import type { UsuariosCreateInputSchema } from "../controllers/usuarios/create-user";
import type { UsuariosUpdateInputSchema } from "../controllers/usuarios/update-user";

export class UsuariosModel {
  // Cria usuário
  async create(data: z.infer<typeof UsuariosCreateInputSchema>) {
    const user = await prisma.usuarios.create({
      data: {
        ...data,
        permissoes: {
          connect: data.permissoes.split(",").map((id) => ({ id })),
        },
      },
      include: {
        nucleo: {
          select: {
            id: true,
            nome: true,
            regioes: {
              select: {
                id: true,
                nome: true,
              },
            },
          },
        },
        permissoes: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return user;
  }

  // Busca usuário por ID, com opção de omitir senha
  async findById<T extends boolean = true>(
    id: string,
    omitPassword: T = true as T
  ) {
    const user = await prisma.usuarios.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        nucleo: {
          select: {
            id: true,
            nome: true,
            regioes: {
              select: {
                id: true,
                nome: true,
              },
            },
          },
        },
        permissoes: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (omitPassword) {
      const { senha, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }

    return user;
  }

  // Busca usuário por email, retorna apenas ID e senha
  async findByEmail(email: string) {
    const user = await prisma.usuarios.findUniqueOrThrow({
      where: { email },
      select: {
        id: true,
        senha: true,
      },
    });

    return user;
  }

  // Retorna todos os usuários ativos
  async findAll() {
    return prisma.usuarios.findMany({
      where: {
        deletado: false,
      },
      include: {
        nucleo: true,
      },
    });
  }

  // Atualiza usuário
  async update(data: z.infer<typeof UsuariosUpdateInputSchema>) {
    return prisma.usuarios.update({
      where: { id: data.id as string },
      data,
      include: {
        nucleo: true,
      },
    });
  }

  // Exclui usuário (soft delete opcional)
  async exclude(id: string, soft = false) {
    if (soft) {
      return prisma.usuarios.update({
        where: { id },
        data: {
          deletado: true,
          deletadoEm: new Date(),
        },
      });
    }

    return prisma.usuarios.delete({
      where: { id },
    });
  }
}
