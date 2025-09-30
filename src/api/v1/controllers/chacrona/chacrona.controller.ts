import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { ChacronaModel } from "../../models/chacrona-model";
import { ChacronaCreateInputSchema, ChacronaUpdateInputSchema } from "prisma/generated/zod";

const chacronaModel = new ChacronaModel();

export const chacronaResponse = z.object({
  id: z.string(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string(),
});

export async function registerChacronaRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()

    .post("/chacrona/create", {
      schema: {
        tags: ["Chacrona"],
        summary: "Create Chacrona",
        body: ChacronaCreateInputSchema,
        response: { 201: chacronaResponse },
      },
    }, async (request, reply) => {
      const chacrona = await chacronaModel.create(request.body);
      return reply.status(201).send(chacrona);
    })

    .put("/chacrona/update", {
      schema: {
        tags: ["Chacrona"],
        summary: "Update Chacrona",
        body: ChacronaUpdateInputSchema,
        response: { 200: chacronaResponse },
      },
    }, async (request, reply) => {
      const chacrona = await chacronaModel.update(request.body);
      return reply.status(200).send(chacrona);
    })

    .get("/chacrona/:id", {
      schema: {
        tags: ["Chacrona"],
        summary: "Get Chacrona by ID",
        params: z.object({ id: z.string() }),
        response: { 200: chacronaResponse, 404: z.object({ message: z.string() }) },
      },
    }, async (request, reply) => {
      const chacrona = await chacronaModel.findById(request.params.id);
      if (!chacrona) return reply.status(404).send({ message: "Chacrona not found" });
      return reply.status(200).send(chacrona);
    })

    .get("/chacrona", {
      schema: {
        tags: ["Chacrona"],
        summary: "Get all Chacronas",
        response: { 200: z.array(chacronaResponse) },
      },
    }, async (_, reply) => {
      const chacronas = await chacronaModel.findAll();
      return reply.status(200).send(chacronas);
    })

    .delete("/chacrona/:id", {
      schema: {
        tags: ["Chacrona"],
        summary: "Delete Chacrona",
        params: z.object({ id: z.string() }),
        querystring: z.object({ soft: z.boolean().optional() }),
        response: { 200: chacronaResponse },
      },
    }, async (request, reply) => {
      const { id } = request.params;
      const { soft = true } = request.query;
      const chacrona = await chacronaModel.exclude(id, soft);
      return reply.status(200).send(chacrona);
    });
}
