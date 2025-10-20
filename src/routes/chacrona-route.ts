import { createChacronaRoute } from "@/api/v1/controllers/chacrona/create-chacrona";
import { deleteChacronaRoute } from "@/api/v1/controllers/chacrona/delete-chacrona";
import { getAllChacronasRoute } from "@/api/v1/controllers/chacrona/get-all-chacronas";
import { getChacronaByIdRoute } from "@/api/v1/controllers/chacrona/get-chacrona-by-id";
import { updateChacronaRoute } from "@/api/v1/controllers/chacrona/update-chacrona";
import type { FastifyInstance } from "fastify";


export async function registerChacronaRoutes(app: FastifyInstance) {
  await createChacronaRoute(app);
  await updateChacronaRoute(app);
  await getChacronaByIdRoute(app);
  await getAllChacronasRoute(app);
  await deleteChacronaRoute(app);
}
