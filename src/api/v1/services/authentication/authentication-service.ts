import { compare } from "bcryptjs";
import { UserModel } from "../../models/user-model";
import { BadRequestError } from "@/errors/bad-request-error";

interface AuthenticationParams {
  email: string;
  password: string;
}

export async function authenticationService({
  email,
  password,
}: AuthenticationParams) {
  const userModel = new UserModel();
  const user = await userModel.findByEmail(email);
  const doesPasswordMatch = await compare(password, user.password);

  if (doesPasswordMatch === false) {
    throw new BadRequestError("Credenciais inválidas");
  }

  // Omit the password from the returned user object
  const { password: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword };
}
