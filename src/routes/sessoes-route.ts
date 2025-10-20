import { createSessaoRoute } from "@/api/v1/controllers/sessoes/create-sessao";
import { deleteSessaoRoute } from "@/api/v1/controllers/sessoes/delete-sessao";
import { getAllSessoesRoute } from "@/api/v1/controllers/sessoes/get-all-sessoes";
import { getSessaoByIdRoute } from "@/api/v1/controllers/sessoes/get-sessao-by-id";
import { updateSessaoRoute } from "@/api/v1/controllers/sessoes/update-sessao";
import type { FastifyInstance } from "fastify";


export async function registerSessoesRoutes(app: FastifyInstance) {
  await createSessaoRoute(app);
  await updateSessaoRoute(app);
  await getSessaoByIdRoute(app);
  await getAllSessoesRoute(app);
  await deleteSessaoRoute(app);
}
