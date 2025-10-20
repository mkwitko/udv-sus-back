import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { NucleosModel } from "../../models/nucleos-model";
import { nucleosResponse } from "./create-nucleo";
import z from "zod";

export const NucleosUpdateInputSchema = z.object({
  id: z.string(),
  nome: z.string().optional(),
  regiao: z.string().optional(),
  deletado: z.boolean().optional(),
  deletadoEm: z.date().optional(),
});


const nucleosModel = new NucleosModel();

export async function updateNucleoRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    "/nucleo/update",
    {
      schema: {
        tags: ["Nucleos"],
        summary: "Update Nucleo",
        description: "Update an existing Nucleo",
        body: NucleosUpdateInputSchema,
        response: {
          200: nucleosResponse,
        },
      },
    },
    async (request, response) => {
      const nucleos = await nucleosModel.update(request.body);
      return response.status(200).send(nucleos);
    }
  );
}
