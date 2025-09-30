import { PrismaClient } from "@prisma/client";
import type { MaririCreateInputSchema, MaririUpdateInputSchema } from "prisma/generated/zod";
import type z from "zod";

const prisma = new PrismaClient();

export class MaririModel {
  async create(data: z.infer<typeof MaririCreateInputSchema>) {
    return prisma.mariri.create({ data });
  }

  async update(data: z.infer<typeof MaririUpdateInputSchema>) {
    return prisma.mariri.update({
      where: { id: data.id as string },
      data,
    });
  }

  async findById(id: string) {
    return prisma.mariri.findUnique({ where: { id } });
  }

  async findAll() {
    return prisma.mariri.findMany();
  }

  async exclude(id: string, soft = true) {
    if (soft) {
      return prisma.mariri.update({
        where: { id },
        data: { deletado: true, deletadoEm: new Date() },
      });
    }
    return prisma.mariri.delete({ where: { id } });
  }
}
