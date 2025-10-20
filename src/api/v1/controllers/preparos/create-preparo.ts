import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { PreparosModel } from "../../models/preparos-model";

const preparosModel = new PreparosModel();

export const PreparosCreateInputSchema = z.object({
  inicio: z.string(),
  fim: z.string(),
  producaoLitros: z.string(),
  nucleosId: z.string().optional(),
  mariri: z.object({
    pesoKg: z.string(),
    unidades: z.string(),
    tipo: z.string(),
    tipoPlantacao: z.string(),
    origemMensagem: z.string(),
  }).optional(),
  chacrona: z.object({
    pesoKg: z.string(),
    unidades: z.string(),
    tipoPlantacao: z.string(),
    origemMensagem: z.string(),
  }).optional(),
  lenha: z.object({
    quantidadeM2: z.string(),
    tempoFornalhaAcesa: z.string(),
    tipoLenha: z.string(),
    tipoFornalha: z.string(),
  }).optional(),
});

export const preparosResponse = z.object({
  id: z.string(),
  inicio: z.date(),
  fim: z.date(),
  producaoLitros: z.string(),
  nucleosId: z.string().nullable().optional(),
});

export async function createPreparoRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/preparo/create",
    {
      schema: {
        tags: ["Preparos"],
        summary: "Create Preparo",
        operationId: "createPreparo",
        body: PreparosCreateInputSchema,
        response: { 201: preparosResponse },
      },
    },
    async (request, reply) => {
      const preparo = await preparosModel.create(request.body);
      return reply.status(201).send(preparo);
    }
  );
}
