import { createNucleoRoute } from "@/api/v1/controllers/nucleos/create-nucleo";
import { deleteNucleoRoute } from "@/api/v1/controllers/nucleos/delete-nucleo";
import { getAllNucleosRoute } from "@/api/v1/controllers/nucleos/get-all-nucleos";
import { getNucleoByIdRoute } from "@/api/v1/controllers/nucleos/get-nucleo-by-id";
import { getNucleoByRegionIdRoute } from "@/api/v1/controllers/nucleos/get-nucleo-by-region";
import { updateNucleoRoute } from "@/api/v1/controllers/nucleos/update-nucleo";
import { getAllRegioes } from "@/api/v1/controllers/regioes/get-all-regioes";
import type { FastifyInstance } from "fastify";


export async function registerNucleosRoutes(app: FastifyInstance) {
  createNucleoRoute(app);
  updateNucleoRoute(app);
  getNucleoByIdRoute(app);
  getNucleoByRegionIdRoute(app);
  getAllNucleosRoute(app);
  deleteNucleoRoute(app);
  getAllRegioes(app)
}
