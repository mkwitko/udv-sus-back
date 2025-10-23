import { addDataToSheet } from '@/api/v1/controllers/sheets/add-to-sheet'
import { createSheet } from '@/api/v1/controllers/sheets/create-sheet'
import { deleteRowByValueRoute } from '@/api/v1/controllers/sheets/delete-row-by-value'
import { deleteSheet } from '@/api/v1/controllers/sheets/delete-sheet'
import { listSheets } from '@/api/v1/controllers/sheets/list-sheet'
import type { FastifyInstance } from 'fastify'

export async function sheetsRoute(app: FastifyInstance) {
  app.register(createSheet)
  app.register(listSheets)
  app.register(addDataToSheet)
  app.register(deleteRowByValueRoute)
  app.register(deleteSheet)
}
