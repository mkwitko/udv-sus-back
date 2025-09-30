import { UsuariosModel } from '../../models/usuarios-model'

export async function deleteUserService({
  userId,
  soft,
}: {
  userId: string
  soft?: boolean
}) {
  const userModel = new UsuariosModel()
  const user = await userModel.exclude(userId, soft)
  return { user }
}
