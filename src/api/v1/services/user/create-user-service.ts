import { hash } from "bcryptjs";
import type z from "zod";
import type { UsuariosCreateInputSchema } from "../../controllers/usuarios/create-user";
import { UsuariosModel } from "../../models/usuarios-model";

export async function createUserService(
  data: z.infer<typeof UsuariosCreateInputSchema>
) {
  const hashedPassword = await hash(data.senha, 10);
  const userModel = new UsuariosModel();
  const user = await userModel.create({
    ...data,
    senha: hashedPassword,
  });
  return { user };
}
