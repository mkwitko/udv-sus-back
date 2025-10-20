import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { PreparosModel } from "../../models/preparos-model";
import { preparosResponse } from "./create-preparo";
import z from "zod";

const preparosModel = new PreparosModel();

export const PreparosUpdateInputSchema = z.object({
  id: z.string(),
  inicio: z.string().optional(),
  fim: z.string().optional(),
  producaoLitros: z.string().optional(),
  maririId: z.string().optional(),
  chacronaId: z.string().optional(),
  lenhaId: z.string().optional(),
  nucleosId: z.string().optional(),
  deletado: z.boolean().optional(),
  deletadoEm: z.date().optional(),
});


export async function updatePreparoRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    "/preparo/update",
    {
      schema: {
        tags: ["Preparos"],
        summary: "Update Preparo",
        operationId: "updatePreparo",
        body: PreparosUpdateInputSchema,
        response: { 200: preparosResponse },
      },
    },
    async (request, reply) => {
      const preparo = await preparosModel.update(request.body);
      return reply.status(200).send(preparo);
    }
  );
}
