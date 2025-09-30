import { hash } from "bcryptjs";
import { UsuariosModel } from "../../models/usuarios-model";

export async function initUserService() {
  const hashedPassword = await hash("xhu7voh8", 10);
  const userModel = new UsuariosModel();

  const user = await userModel.create({
    nome: "Maurício de Oliveira Kwitko",
    cpf: "86210262015",
    senha: hashedPassword,
    email: "mauriciokwt@gmail.com",
    administrador: true,
  });
  return { user };
}
