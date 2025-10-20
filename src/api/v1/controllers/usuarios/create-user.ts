import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { createUserService } from "../../services/user/create-user-service";

export const UsuariosCreateInputSchema = z.object({
  nome: z.string(),
  cpf: z.string().optional(),
  senha: z.string(),
  email: z.string().email().optional(),
  ativo: z.boolean().optional(),
  administrador: z.boolean().optional(),
  nucleoId: z.string().optional(),
});

export const userResponse = z.object({
  id: z.string(),
  nome: z.string(),
  email: z.string().nullable(),
  permissoes: z.array(z.object({
    id: z.string(),
    name: z.string(),
  })),
  nucleo: z.object({
    id: z.string(),
    nome: z.string(),
    regioes: z.object({
      id: z.string(),
      nome: z.string(),
    }).nullable()
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
