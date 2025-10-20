import { createLenhaRoute } from "@/api/v1/controllers/lenha/create-lenha";
import { deleteLenhaRoute } from "@/api/v1/controllers/lenha/delete-lenha";
import { getAllLenhasRoute } from "@/api/v1/controllers/lenha/get-all-lenhas";
import { getLenhaByIdRoute } from "@/api/v1/controllers/lenha/get-lenha-by-id";
import { updateLenhaRoute } from "@/api/v1/controllers/lenha/update-lenha";
import type { FastifyInstance } from "fastify";


export async function registerLenhaRoutes(app: FastifyInstance) {
  await createLenhaRoute(app);
  await updateLenhaRoute(app);
  await getLenhaByIdRoute(app);
  await getAllLenhasRoute(app);
  await deleteLenhaRoute(app);
}
