import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'
import { SessoesModel } from '../../models/sessoes-model'

const sessoesModel = new SessoesModel()

export const SessoesCreateInputSchema = z.object({
  sessao: z.string(),
  pessoas: z.string(),
  data: z.string(),
  descricao: z.string().optional(),
  quantidadeVegetal: z.string(),
  nucleosId: z.string().optional(),
})

export const sessoesResponse = z.object({
  id: z.string(),
  sessao: z.string(),
  descricao: z.string().nullable().optional(),
  data: z.string(),
  pessoas: z.string(),
  quantidadeVegetal: z.string(),
  nucleosId: z.string().nullable().optional(),
  Nucleos: z.object({
    nome: z.string(),
    regioes: z.object({
      nome: z.string(),
    }).nullable()
  }).nullable()
})

export async function createSessaoRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/sessao/create',
    {
      schema: {
        tags: ['Sessoes'],
        summary: 'Create Sessao',
        body: SessoesCreateInputSchema,
        response: { 201: sessoesResponse },
      },
    },
    async (request, reply) => {
      const sessao = await sessoesModel.create(request.body)
      return reply.status(201).send(sessao)
    },
  )
}
