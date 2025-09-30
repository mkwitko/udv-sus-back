import { hash } from "bcryptjs";
import { UsuariosModel } from "../../models/usuarios-model";
import type z from "zod";
import type { UsuariosCreateInputSchema } from "prisma/generated/zod";

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
