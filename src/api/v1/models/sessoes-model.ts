import { PrismaClient, type Sessoes } from "@prisma/client";
import type { SessoesUpdateInputSchema } from "prisma/generated/zod";
import type z from "zod";

const prisma = new PrismaClient();

export class SessoesModel {
  async create(data: Omit<Sessoes, "id" | "criadoEm" | "atualizadoEm" | "deletadoEm" | "deletado">) {
    return prisma.sessoes.create({ data });
  }

  async update(data: z.infer<typeof SessoesUpdateInputSchema>) {
    return prisma.sessoes.update({
      where: { id: data.id as string },
      data,
    });
  }

  async findById(id: string) {
    return prisma.sessoes.findUnique({ where: { id } });
  }

  async findAll() {
    return prisma.sessoes.findMany();
  }

  async exclude(id: string) {
    return prisma.sessoes.delete({ where: { id } });
  }
}
