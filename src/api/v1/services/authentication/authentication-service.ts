import { compare } from "bcryptjs";
import { UsuariosModel } from "../../models/usuarios-model";
import { BadRequestError } from "@/errors/bad-request-error";

interface AuthenticationParams {
  email: string;
  password: string;
}

export async function authenticationService({
  email,
  password,
}: AuthenticationParams) {
  const usuariosModel = new UsuariosModel();
  const user = await usuariosModel.findByEmail(email);
  const doesPasswordMatch = await compare(password, user.senha);

  if (doesPasswordMatch === false) {
    throw new BadRequestError("Credenciais inválidas");
  }

  // Omit the password from the returned user object
  const { senha: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword };
}
