import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { LenhaModel } from "../../models/lenha-model";
import { LenhaCreateInputSchema, LenhaUpdateInputSchema } from "prisma/generated/zod";

const lenhaModel = new LenhaModel();

export const lenhaResponse = z.object({
  id: z.string(),
  quantidadeM2: z.string(),
  tempoFornalhaAcesa: z.string(),
  tipoLenha: z.string(),
  tipoFornalha: z.string(),
});

export async function registerLenhaRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()

    .post("/lenha/create", {
      schema: {
        tags: ["Lenha"],
        summary: "Create Lenha",
        body: LenhaCreateInputSchema,
        response: { 201: lenhaResponse },
      },
    }, async (request, reply) => {
      const lenha = await lenhaModel.create(request.body);
      return reply.status(201).send(lenha);
    })

    .put("/lenha/update", {
      schema: {
        tags: ["Lenha"],
        summary: "Update Lenha",
        body: LenhaUpdateInputSchema,
        response: { 200: lenhaResponse },
      },
    }, async (request, reply) => {
      const lenha = await lenhaModel.update(request.body);
      return reply.status(200).send(lenha);
    })

    .get("/lenha/:id", {
      schema: {
        tags: ["Lenha"],
        summary: "Get Lenha by ID",
        params: z.object({ id: z.string() }),
        response: { 200: lenhaResponse, 404: z.object({ message: z.string() }) },
      },
    }, async (request, reply) => {
      const lenha = await lenhaModel.findById(request.params.id);
      if (!lenha) return reply.status(404).send({ message: "Lenha not found" });
      return reply.status(200).send(lenha);
    })

    .get("/lenha", {
      schema: {
        tags: ["Lenha"],
        summary: "Get all Lenhas",
        response: { 200: z.array(lenhaResponse) },
      },
    }, async (_, reply) => {
      const lenhas = await lenhaModel.findAll();
      return reply.status(200).send(lenhas);
    })

    .delete("/lenha/:id", {
      schema: {
        tags: ["Lenha"],
        summary: "Delete Lenha",
        params: z.object({ id: z.string() }),
        querystring: z.object({ soft: z.boolean().optional() }),
        response: { 200: lenhaResponse },
      },
    }, async (request, reply) => {
      const { id } = request.params;
      const { soft = true } = request.query;
      const lenha = await lenhaModel.exclude(id, soft);
      return reply.status(200).send(lenha);
    });
}
