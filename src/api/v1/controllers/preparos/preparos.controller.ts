import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { PreparosModel } from "../../models/preparos-model";
import { PreparosCreateInputSchema, PreparosUpdateInputSchema } from "prisma/generated/zod";

const preparosModel = new PreparosModel();

export const preparosResponse = z.object({
  id: z.string(),
  inicio: z.date(),
  fim: z.date(),
  producaoLitros: z.string(),
  nucleosId: z.string().nullable().optional(),
});

export async function registerPreparosRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()

    .post("/preparo/create", {
      schema: {
        tags: ["Preparos"],
        summary: "Create Preparo",
        body: PreparosCreateInputSchema,
        response: { 201: preparosResponse },
      },
    }, async (request, reply) => {
      const preparo = await preparosModel.create(request.body);
      return reply.status(201).send(preparo);
    })

    .put("/preparo/update", {
      schema: {
        tags: ["Preparos"],
        summary: "Update Preparo",
        body: PreparosUpdateInputSchema,
        response: { 200: preparosResponse },
      },
    }, async (request, reply) => {
      const preparo = await preparosModel.update(request.body);
      return reply.status(200).send(preparo);
    })

    .get("/preparo/:id", {
      schema: {
        tags: ["Preparos"],
        summary: "Get Preparo by ID",
        params: z.object({ id: z.string() }),
        response: { 200: preparosResponse, 404: z.object({ message: z.string() }) },
      },
    }, async (request, reply) => {
      const preparo = await preparosModel.findById(request.params.id);
      if (!preparo) return reply.status(404).send({ message: "Preparo not found" });
      return reply.status(200).send(preparo);
    })

    .get("/preparo", {
      schema: {
        tags: ["Preparos"],
        summary: "Get all Preparos",
        response: { 200: z.array(preparosResponse) },
      },
    }, async (_, reply) => {
      const preparos = await preparosModel.findAll();
      return reply.status(200).send(preparos);
    })

    .delete("/preparo/:id", {
      schema: {
        tags: ["Preparos"],
        summary: "Delete Preparo",
        params: z.object({ id: z.string() }),
        querystring: z.object({ soft: z.boolean().optional() }),
        response: { 200: preparosResponse },
      },
    }, async (request, reply) => {
      const { id } = request.params;
      const { soft = true } = request.query;
      const preparo = await preparosModel.exclude(id, soft);
      return reply.status(200).send(preparo);
    });
}
