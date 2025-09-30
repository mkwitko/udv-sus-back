import { UsuariosModel } from "../../models/usuarios-model";

export async function findUserByIdService({ id }: { id: string }) {
  const userModel = new UsuariosModel();
  const user = await userModel.findById(id);
  return { user };
}
