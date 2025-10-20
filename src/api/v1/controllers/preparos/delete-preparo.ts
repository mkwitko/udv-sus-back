import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { PreparosModel } from "../../models/preparos-model";
import { preparosResponse } from "./create-preparo";

const preparosModel = new PreparosModel();

export async function deletePreparoRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    "/preparo/:id",
    {
      schema: {
        tags: ["Preparos"],
        summary: "Delete Preparo",
        operationId: "deletePreparo",
        params: z.object({ id: z.string() }),
        querystring: z.object({ soft: z.boolean().optional() }),
        response: { 200: preparosResponse },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const { soft = false } = request.query;
      const preparo = await preparosModel.exclude(id, soft);
      return reply.status(200).send(preparo);
    }
  );
}
