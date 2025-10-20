import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { NucleosModel } from "../../models/nucleos-model";
import { nucleosResponse } from "./create-nucleo";

const nucleosModel = new NucleosModel();

export async function deleteNucleoRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    "/nucleo/:id",
    {
      schema: {
        tags: ["Nucleos"],
        summary: "Delete Nucleo",
        description: "Soft or hard delete a Nucleo",
        params: z.object({
          id: z.string(),
        }),
        querystring: z.object({
          soft: z.boolean().optional(),
        }),
        response: {
          200: nucleosResponse,
        },
      },
    },
    async (request, response) => {
      const { id } = request.params;
      const { soft = true } = request.query;
      const nucleos = await nucleosModel.exclude(id, soft);
      return response.status(200).send(nucleos);
    }
  );
}
