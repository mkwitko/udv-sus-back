import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { SessoesModel } from "../../models/sessoes-model";
import { sessoesResponse } from "./create-sessao";
import { authenticationMiddleware } from "@/middlewares/authentication-middleware";
import { prisma } from "prisma/db";

const sessoesModel = new SessoesModel();

export async function getAllSessoesRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().register(authenticationMiddleware).get(
    "/sessao",
    {
      schema: {
        tags: ["Sessoes"],
        summary: "Get all Sessoes (optional date filter)",
        querystring: z.object({
          dataInicio: z.string().optional(),
          dataFim: z.string().optional(),
        }),
        response: { 200: z.array(sessoesResponse) },
      },
    },
    async (req, reply) => {
      const id = req.user.userId
      const user = await prisma.usuarios.findUnique({
        where: { id },
        select: { nucleoId: true}
      })

      if(!user?.nucleoId){
        return reply.status(200).send([]) 
      }

      const sessoes = await sessoesModel.findAll(req.query, user?.nucleoId);

      return reply.status(200).send(sessoes);
    }
  );
}
