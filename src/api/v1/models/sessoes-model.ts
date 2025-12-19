import type z from "zod";
import type { SessoesCreateInputSchema } from "../controllers/sessoes/create-sessao";
import type { SessoesUpdateInputSchema } from "../controllers/sessoes/update-sessao";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export class SessoesModel {
  async create(data: z.infer<typeof SessoesCreateInputSchema>) {
    const include = {
      Nucleos: {
        select: {
          nome: true,
          regioes: {
            select: {
              nome: true,
            },
          },
        },
      },
    };
    return prisma.sessoes.create({
      data,
      include,
    });
  }

  async update(data: z.infer<typeof SessoesUpdateInputSchema>) {
    return prisma.sessoes.update({
      where: { id: data.id as string },
      select: {
        id: true,
      },
      data,
    });
  }

  async findById(id: string) {
    return prisma.sessoes.findUnique({ where: { id } });
  }

  async findAll(
    query: {
      dataInicio?: string;
      dataFim?: string;
    },
    nucleoId: string
  ) {
    const { dataInicio, dataFim } = query;

    const where: Record<string, any> = {};

    if (dataInicio && dataFim) {
      where.data = {
        gte: dataInicio,
        lte: dataFim,
      };
    } else if (dataInicio) {
      where.data = { gte: dataInicio };
    } else if (dataFim) {
      where.data = { lte: dataFim };
    }

    return prisma.sessoes.findMany({
      where: {
        ...where,
        nucleosId: nucleoId,
      },
      include: {
        Nucleos: {
          select: {
            nome: true,
          },
        },
      },
      orderBy: { data: "desc" },
    });
  }

  async exclude(id: string) {
    return prisma.sessoes.delete({
      where: { id },
      select: {
        id: true,
      },
    });
  }
}
