import { PrismaClient } from "@prisma/client";
import type { PreparosCreateInputSchema, PreparosUpdateInputSchema } from "prisma/generated/zod";
import type z from "zod";

const prisma = new PrismaClient();

export class PreparosModel {
  async create(data: z.infer<typeof PreparosCreateInputSchema>) {
    return prisma.preparos.create({ data });
  }

  async update(data: z.infer<typeof PreparosUpdateInputSchema>) {
    return prisma.preparos.update({
      where: { id: data.id as string },
      data,
    });
  }

  async findById(id: string) {
    return prisma.preparos.findUnique({ where: { id } });
  }

  async findAll() {
    return prisma.preparos.findMany();
  }

  async exclude(id: string, soft = true) {
    if (soft) {
      return prisma.preparos.update({
        where: { id },
        data: { deletado: true, deletadoEm: new Date() },
      });
    }
    return prisma.preparos.delete({ where: { id } });
  }
}
