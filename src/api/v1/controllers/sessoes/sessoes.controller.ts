import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { SessoesCreateInputSchema, SessoesUpdateInputSchema } from "prisma/generated/zod";
import { SessoesModel } from "../../models/sessoes-model";

const sessoesModel = new SessoesModel();

export const sessoesResponse = z.object({
  id: z.string(),
  sessao: z.string(),
  pessoas: z.string(),
  quantidadeVegetal: z.string(),
  nucleosId: z.string().nullable().optional(),
});

export async function registerSessoesRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()

    // Criar sessão
    .post("/sessao/create", {
      schema: {
        tags: ["Sessoes"],
        summary: "Create Sessao",
        body: SessoesCreateInputSchema,
        response: { 201: sessoesResponse },
      },
    }, async (request, reply) => {
      const sessao = await sessoesModel.create(request.body);
      return reply.status(201).send(sessao);
    })

    // Atualizar sessão
    .put("/sessao/update", {
      schema: {
        tags: ["Sessoes"],
        summary: "Update Sessao",
        body: SessoesUpdateInputSchema,
        response: { 200: sessoesResponse },
      },
    }, async (request, reply) => {
      const sessao = await sessoesModel.update(request.body);
      return reply.status(200).send(sessao);
    })

    // Buscar por ID
    .get("/sessao/:id", {
      schema: {
        tags: ["Sessoes"],
        summary: "Get Sessao by ID",
        params: z.object({ id: z.string() }),
        response: { 200: sessoesResponse, 404: z.object({ message: z.string() }) },
      },
    }, async (request, reply) => {
      const sessao = await sessoesModel.findById(request.params.id);
      if (!sessao) return reply.status(404).send({ message: "Sessao not found" });
      return reply.status(200).send(sessao);
    })

    // Buscar todas
    .get("/sessao", {
      schema: {
        tags: ["Sessoes"],
        summary: "Get all Sessoes",
        response: { 200: z.array(sessoesResponse) },
      },
    }, async (_, reply) => {
      const sessoes = await sessoesModel.findAll();
      return reply.status(200).send(sessoes);
    })

    // Deletar
    .delete("/sessao/:id", {
      schema: {
        tags: ["Sessoes"],
        summary: "Delete Sessao",
        params: z.object({ id: z.string() }),
        response: { 200: sessoesResponse },
      },
    }, async (request, reply) => {
      const { id } = request.params;
      const sessao = await sessoesModel.exclude(id);
      return reply.status(200).send(sessao);
    });
}
