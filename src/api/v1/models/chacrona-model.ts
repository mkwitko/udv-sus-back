import { PrismaClient } from "@prisma/client";
import type { ChacronaCreateInputSchema, ChacronaUpdateInputSchema } from "prisma/generated/zod";
import type z from "zod";

const prisma = new PrismaClient();

export class ChacronaModel {
  async create(data: z.infer<typeof ChacronaCreateInputSchema>) {
    return prisma.chacrona.create({ data });
  }

  async update(data: z.infer<typeof ChacronaUpdateInputSchema>) {
    return prisma.chacrona.update({
      where: { id: data.id as string },
      data,
    });
  }

  async findById(id: string) {
    return prisma.chacrona.findUnique({ where: { id } });
  }

  async findAll() {
    return prisma.chacrona.findMany();
  }

  async exclude(id: string, soft = true) {
    if (soft) {
      return prisma.chacrona.update({
        where: { id },
        data: { deletado: true, deletadoEm: new Date() },
      });
    }
    return prisma.chacrona.delete({ where: { id } });
  }
}
