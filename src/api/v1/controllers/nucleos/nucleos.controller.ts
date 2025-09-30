import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { NucleosModel } from "../../models/nucleos-model";
import { NucleosCreateInputSchema, NucleosUpdateInputSchema } from "prisma/generated/zod";

const nucleosModel = new NucleosModel();

export const nucleosResponse = z.object({
  id: z.string(),
  nome: z.string(),
  regiao: z.string(),
});

export async function registerNucleosRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()
    // Criar núcleo
    .post(
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
    )

    // Atualizar núcleo
    .put(
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
    )

    // Buscar núcleo por ID
    .get(
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
    )

    // Buscar todos os núcleos
    .get(
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
    )

    // Deletar núcleo
    .delete(
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
