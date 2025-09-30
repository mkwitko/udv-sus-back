import { UsuariosModel } from "@/api/v1/models/usuarios-model";
import type z from "zod";
import type { UsuariosUpdateInputSchema } from "prisma/generated/zod";

export async function updateUserService(
  data: z.infer<typeof UsuariosUpdateInputSchema>
) {
  const userModel = new UsuariosModel();
  const user = await userModel.update(data);
  return { user };
}
