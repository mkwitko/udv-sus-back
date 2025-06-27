import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { authenticationMiddleware } from "@/middlewares/authentication-middleware";
import { plantResponse } from "./create-plants";
import { updatePlantsService } from "../../services/plants/update-plants-service";

export async function updatePlant(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(authenticationMiddleware)
    .put(
      "/plant/update",
      {
        schema: {
          tags: ["Plant"],
          summary: "Update Plant",
          description: "Update a new Plant",
          operationId: "updatePlant",
          body: updatePlantRequestScheam,
          response: {
            201: plantResponse,
          },
        },
      },
      async (request, response) => {
        const { plants } = await updatePlantsService(request.body);
        return response.status(201).send(plants);
      }
    );
}

export const updatePlantRequestScheam = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  observation: z.string().optional(),

  image: z.string().optional(),
  origin: z.string().optional(),
  identificationNumber: z.string().optional(),
  isIdentified: z.boolean().optional(),

  plantationDate: z.string().optional(),
  pictureDate: z.string().optional(),

  lastWatering: z.string().optional(),
  lastFertilization: z.string().optional(),
  lastPestControl: z.string().optional(),
  lastPruning: z.string().optional(),
  lastHarvest: z.string().optional(),
  lastWeeding: z.string().optional(),
  lastSoilAnalysis: z.string().optional(),

  latitude: z.number(),
  longitude: z.number(),
  address: z.string().optional(),

  typeId: z.string().nullable(),
  centerId: z.string().nullable(),
});
