import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { NucleosModel } from "../../models/nucleos-model";

const nucleosModel = new NucleosModel();

export const nucleosResponse = z.object({
  id: z.string(),
  nome: z.string(),
  regiao: z.string(),
});

export const NucleosCreateInputSchema = z.object({
  nome: z.string(),
  regiao: z.string(),
});

export async function createNucleoRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/nucleo/create",
    {
      schema: {
        tags: ["Nucleos"],
        summary: "Create Nucleo",
        description: "Create a new Nucleo",
        body: NucleosCreateInputSchema,
        response: {
          201: nucleosResponse,
        },
      },
    },
    async (request, response) => {
      const nucleos = await nucleosModel.create(request.body);
      return response.status(201).send(nucleos);
    }
  );
}
