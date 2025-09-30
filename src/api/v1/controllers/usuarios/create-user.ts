import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { createUserService } from "../../services/user/create-user-service";
import { UsuariosCreateInputSchema } from "prisma/generated/zod";

export const userResponse = z.object({
  id: z.string(),
  nome: z.string(),
  email: z.string().nullable(),
  administrador: z.boolean(),
  nucleo: z.object({
    id: z.string(),
    nome: z.string(),
    regiao: z.string(),
  }).nullable()
});

export async function createUser(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/user/create",
    {
      schema: {
        tags: ["User"],
        summary: "Create User",
        description: "Create a new user",
        operationId: "createUser",
        body: UsuariosCreateInputSchema,
        response: {
          201: userResponse,
        },
      },
    },
    async (request, response) => {
      const { user } = await createUserService(request.body);
      return response.status(201).send(user);
    }
  );
}
