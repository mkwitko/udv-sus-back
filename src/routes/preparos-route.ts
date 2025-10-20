import { createPreparoRoute } from "@/api/v1/controllers/preparos/create-preparo";
import { deletePreparoRoute } from "@/api/v1/controllers/preparos/delete-preparo";
import { getAllPreparosRoute } from "@/api/v1/controllers/preparos/get-all-preparos";
import { getPreparoByIdRoute } from "@/api/v1/controllers/preparos/get-preparo-by-id";
import { updatePreparoRoute } from "@/api/v1/controllers/preparos/update-preparo";
import type { FastifyInstance } from "fastify";


export async function registerPreparosRoutes(app: FastifyInstance) {
  await createPreparoRoute(app);
  await updatePreparoRoute(app);
  await getPreparoByIdRoute(app);
  await getAllPreparosRoute(app);
  await deletePreparoRoute(app);
}
