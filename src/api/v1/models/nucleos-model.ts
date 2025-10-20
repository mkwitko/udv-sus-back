import { prisma } from "prisma/db";
import type { z } from "zod";
import type { NucleosCreateInputSchema } from "../controllers/nucleos/create-nucleo";
import type { NucleosUpdateInputSchema } from "../controllers/nucleos/update-nucleo";

export class NucleosModel {
  // Cria núcleo
  async create(data: z.infer<typeof NucleosCreateInputSchema>) {
    const center = await prisma.nucleos.create({
      data,
    });
    return center;
  }

  // Busca núcleo por ID
  async findById(id: string) {
    const center = await prisma.nucleos.findUniqueOrThrow({
      where: { id },
    });

    return center;
  }

  // Busca todos os núcleos não deletados
  async findAll() {
    const centers = await prisma.nucleos.findMany({
      where: { deletado: false },
    });

    return centers;
  }

  // Atualiza núcleo
  async update(data: z.infer<typeof NucleosUpdateInputSchema>) {
    const center = await prisma.nucleos.update({
      where: { id: data.id as string },
      data,
    });
    return center;
  }

  // Exclui núcleo (soft delete opcional)
  async exclude(id: string, soft = false) {
    if (soft) {
      return prisma.nucleos.update({
        where: { id },
        data: {
          deletado: true,
          deletadoEm: new Date(),
        },
      });
    }

    return prisma.nucleos.delete({
      where: { id },
    });
  }
}
