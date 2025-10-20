import { createMaririRoute } from "@/api/v1/controllers/mariri/create-mariri";
import { deleteMaririRoute } from "@/api/v1/controllers/mariri/delete-mariri";
import { getAllMaririsRoute } from "@/api/v1/controllers/mariri/get-all-mariris";
import { getMaririByIdRoute } from "@/api/v1/controllers/mariri/get-mariri-by-id";
import { updateMaririRoute } from "@/api/v1/controllers/mariri/update-mariri";
import type { FastifyInstance } from "fastify";


export async function registerMaririRoutes(app: FastifyInstance) {
  await createMaririRoute(app);
  await updateMaririRoute(app);
  await getMaririByIdRoute(app);
  await getAllMaririsRoute(app);
  await deleteMaririRoute(app);
}
