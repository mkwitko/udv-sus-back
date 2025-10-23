import { authenticationMiddleware } from "@/middlewares/authentication-middleware";
import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "prisma/db";
import z from "zod";
import { sessoesResponse } from "./create-sessao";

export async function getAllSessoesRoute(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(authenticationMiddleware)
    .get(
      "/sessao",
      {
        schema: {
          tags: ["Sessoes"],
          summary: "Get all Sessoes (optional date filter)",
          querystring: z.object({
            generalView: z.string(),
            regionView: z.string(),
            nucleoView: z.string(),
          }),
          response: { 200: z.array(sessoesResponse) },
        },
      },
      async (req, reply) => {
        const { generalView, regionView, nucleoView } = req.query;

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

        if (generalView) {
          const sessoes = await prisma.sessoes.findMany({
            include,
            orderBy: {
              data: "desc",
            },
          });
          return reply.status(200).send(sessoes);
        }

        if (regionView) {
          const sessoes = await prisma.sessoes.findMany({
            where: {
              Nucleos: {
                regioesId: regionView,
              },
            },
            include,
            orderBy: {
              data: "desc",
            },
          });
          return reply.status(200).send(sessoes);
        }

        if (nucleoView) {
          const sessoes = await prisma.sessoes.findMany({
            where: {
              nucleosId: nucleoView,
            },
            include,
            orderBy: {
              data: "desc",
            },
          });
          return reply.status(200).send(sessoes);
        }

        const id = req.user.userId;
        const user = await prisma.usuarios.findUnique({
          where: { id },
          select: { nucleoId: true },
        });

        if (!user?.nucleoId) {
          return reply.status(200).send([]);
        }

        const sessoes = await prisma.sessoes.findMany({
          where: { nucleosId: user.nucleoId },
          include,
          orderBy: {
            data: "desc",
          },
        });

        return reply.status(200).send(sessoes);
      }
    );
}
