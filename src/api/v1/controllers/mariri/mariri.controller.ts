import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { MaririModel } from "../../models/mariri-model";
import { MaririCreateInputSchema, MaririUpdateInputSchema } from "prisma/generated/zod";

const maririModel = new MaririModel();

export const maririResponse = z.object({
  id: z.string(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string(),
});

export async function registerMaririRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()

    .post("/mariri/create", {
      schema: {
        tags: ["Mariri"],
        summary: "Create Mariri",
        body: MaririCreateInputSchema,
        response: { 201: maririResponse },
      },
    }, async (request, reply) => {
      const mariri = await maririModel.create(request.body);
      return reply.status(201).send(mariri);
    })

    .put("/mariri/update", {
      schema: {
        tags: ["Mariri"],
        summary: "Update Mariri",
        body: MaririUpdateInputSchema,
        response: { 200: maririResponse },
      },
    }, async (request, reply) => {
      const mariri = await maririModel.update(request.body);
      return reply.status(200).send(mariri);
    })

    .get("/mariri/:id", {
      schema: {
        tags: ["Mariri"],
        summary: "Get Mariri by ID",
        params: z.object({ id: z.string() }),
        response: { 200: maririResponse, 404: z.object({ message: z.string() }) },
      },
    }, async (request, reply) => {
      const mariri = await maririModel.findById(request.params.id);
      if (!mariri) return reply.status(404).send({ message: "Mariri not found" });
      return reply.status(200).send(mariri);
    })

    .get("/mariri", {
      schema: {
        tags: ["Mariri"],
        summary: "Get all Mariris",
        response: { 200: z.array(maririResponse) },
      },
    }, async (_, reply) => {
      const mariris = await maririModel.findAll();
      return reply.status(200).send(mariris);
    })

    .delete("/mariri/:id", {
      schema: {
        tags: ["Mariri"],
        summary: "Delete Mariri",
        params: z.object({ id: z.string() }),
        querystring: z.object({ soft: z.boolean().optional() }),
        response: { 200: maririResponse },
      },
    }, async (request, reply) => {
      const { id } = request.params;
      const { soft = true } = request.query;
      const mariri = await maririModel.exclude(id, soft);
      return reply.status(200).send(mariri);
    });
}
