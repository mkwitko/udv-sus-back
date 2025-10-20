import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { updateUserService } from "../../services/user/update-user-service";
import { authenticationMiddleware } from "@/middlewares/authentication-middleware";
import { userResponse } from "./create-user";
import z from "zod";

export const UsuariosUpdateInputSchema = z.object({
  id: z.string(),
  nome: z.string().optional(),
  cpf: z.string().optional(),
  senha: z.string().optional(),
  email: z.string().email().optional(),
  ativo: z.boolean().optional(),
  administrador: z.boolean().optional(),
  nucleoId: z.string().optional(),
  deletado: z.boolean().optional(),
  deletadoEm: z.date().optional(),
});

export async function updateUser(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(authenticationMiddleware)
    .put(
      "/user/update",
      {
        schema: {
          tags: ["User"],
          summary: "Update User",
          description: "Update a new user",
          operationId: "updateUser",
          body: UsuariosUpdateInputSchema,
          response: {
            201: userResponse,
          },
        },
      },
      async (request, response) => {
        const { user } = await updateUserService(request.body);
        return response.status(201).send(user);
      }
    );
}