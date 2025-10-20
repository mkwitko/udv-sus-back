import { createNucleoRoute } from "@/api/v1/controllers/nucleos/create-nucleo";
import { deleteNucleoRoute } from "@/api/v1/controllers/nucleos/delete-nucleo";
import { getAllNucleosRoute } from "@/api/v1/controllers/nucleos/get-all-nucleos";
import { getNucleoByIdRoute } from "@/api/v1/controllers/nucleos/get-nucleo-by-id";
import { updateNucleoRoute } from "@/api/v1/controllers/nucleos/update-nucleo";
import type { FastifyInstance } from "fastify";


export async function registerNucleosRoutes(app: FastifyInstance) {
  await createNucleoRoute(app);
  await updateNucleoRoute(app);
  await getNucleoByIdRoute(app);
  await getAllNucleosRoute(app);
  await deleteNucleoRoute(app);
}
