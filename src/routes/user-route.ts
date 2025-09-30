import { createUser } from "@/api/v1/controllers/usuarios/create-user";
import { deleteUser } from "@/api/v1/controllers/usuarios/delete-user";
import { findMe } from "@/api/v1/controllers/usuarios/find-me";
import { findUserById } from "@/api/v1/controllers/usuarios/find-user-by-id";
import { findUsers } from "@/api/v1/controllers/usuarios/find-users";
import { initUser } from "@/api/v1/controllers/usuarios/init-user";
import { updateUser } from "@/api/v1/controllers/usuarios/update-user";
import { env } from "@/env";
import type { FastifyInstance } from "fastify";

export async function userRoute(app: FastifyInstance) {
  app.register(createUser);
  app.register(deleteUser);
  app.register(findUsers);
  app.register(findUserById);
  app.register(updateUser);
  app.register(findMe);

  // Apenas ativar para criar o primeiro usuário com a empresa da Prosperapps atrelado
  if (env.ENVIRONMENT === "development") app.register(initUser);
}
