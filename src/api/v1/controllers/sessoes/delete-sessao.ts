import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { SessoesModel } from '../../models/sessoes-model'
import { sessoesResponse } from './create-sessao'
import z from 'zod'

const sessoesModel = new SessoesModel()

export async function deleteSessaoRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().delete(
    '/sessao/:id',
    {
      schema: {
        tags: ['Sessoes'],
        summary: 'Delete Sessao',
        params: z.object({ id: z.string() }),
        response: { 200: sessoesResponse },
      },
    },
    async (request, reply) => {
      const { id } = request.params
      const sessao = await sessoesModel.exclude(id)
      return reply.status(200).send(sessao)
    },
  )
}
