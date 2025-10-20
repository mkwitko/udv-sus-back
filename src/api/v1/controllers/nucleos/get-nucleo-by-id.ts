import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { NucleosModel } from "../../models/nucleos-model";
import { nucleosResponse } from "./create-nucleo";

const nucleosModel = new NucleosModel();

export async function getNucleoByIdRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/nucleo/:id",
    {
      schema: {
        tags: ["Nucleos"],
        summary: "Get Nucleo by ID",
        description: "Retrieve a Nucleo by its ID",
        params: z.object({
          id: z.string(),
        }),
        response: {
          200: nucleosResponse,
        },
      },
    },
    async (request, response) => {
      const nucleos = await nucleosModel.findById(request.params.id);
      return response.status(200).send(nucleos);
    }
  );
}
