import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { PreparosModel } from "../../models/preparos-model";
import { authenticationMiddleware } from "@/middlewares/authentication-middleware";
import { prisma } from "prisma/db";

const preparosModel = new PreparosModel();

export async function getAllPreparosRoute(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(authenticationMiddleware)
    .get(
      "/preparo",
      {
        schema: {
          tags: ["Preparos"],
          summary: "Get all Preparos",
          operationId: "getAllPreparos",
          querystring: z.object({
            dataInicio: z.string().optional(),
            dataFim: z.string().optional(),
          }),
          response: {
            200: z.array(
              z.object({
                id: z.string(),
                inicio: z.date(),
                fim: z.date(),
                producaoLitros: z.string(),
                nucleosId: z.string().nullable().optional(),
                mariri: z
                  .object({
                    id: z.string(),
                    pesoKg: z.string(),
                    unidades: z.string(),
                    tipo: z.string(),
                    tipoPlantacao: z.string(),
                    origemMensagem: z.string(),
                  })
                  .nullable(),
                chacrona: z
                  .object({
                    id: z.string(),
                    pesoKg: z.string(),
                    unidades: z.string(),
                    tipoPlantacao: z.string(),
                    origemMensagem: z.string(),
                  })
                  .nullable(),
                lenha: z
                  .object({
                    id: z.string(),
                    quantidadeM2: z.string(),
                    tempoFornalhaAcesa: z.string(),
                    tipoLenha: z.string(),
                    tipoFornalha: z.string(),
                  })
                  .nullable(),
              })
            ),
          },
        },
      },
      async (req, reply) => {
        const id = req.user.userId;
        const user = await prisma.usuarios.findUnique({
          where: { id },
          select: { nucleoId: true },
        });

        if (!user?.nucleoId) {
          return reply.status(200).send([]);
        }
        const preparos = await preparosModel.findAll(req.query, user.nucleoId);
        return reply.status(200).send(preparos);
      }
    );
}
