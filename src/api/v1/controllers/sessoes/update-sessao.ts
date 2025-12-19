import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { SessoesModel } from "../../models/sessoes-model";
import z from "zod";

const sessoesModel = new SessoesModel();

export const SessoesUpdateInputSchema = z.object({
  id: z.string(),
  sessao: z.string().optional(),
  descricao: z.string().nullable().optional(),
  data: z.string().optional(),
  pessoas: z.string().optional(),
  quantidadeVegetal: z.string().optional(),
  nucleosId: z.string().optional(),
});

export async function updateSessaoRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    "/sessao/update",
    {
      schema: {
        tags: ["Sessoes"],
        summary: "Update Sessao",
        body: SessoesUpdateInputSchema,
        response: {
          200: z.object({
            id: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const sessao = await sessoesModel.update(request.body);
      return reply.status(200).send(sessao);
    }
  );
}
