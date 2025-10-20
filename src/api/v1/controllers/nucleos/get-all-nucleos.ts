import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { NucleosModel } from "../../models/nucleos-model";
import { nucleosResponse } from "./create-nucleo";
import z from "zod";

const nucleosModel = new NucleosModel();

export async function getAllNucleosRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/nucleo",
    {
      schema: {
        tags: ["Nucleos"],
        summary: "Get all Nucleos",
        description: "Retrieve all Nucleos",
        response: {
          200: z.array(nucleosResponse),
        },
      },
    },
    async (_, response) => {
      const nucleos = await nucleosModel.findAll();
      return response.status(200).send(nucleos);
    }
  );
}
