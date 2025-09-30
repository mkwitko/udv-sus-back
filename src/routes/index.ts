import { app } from "@/app";
import { userRoute } from "./user-route";
import { authenticationRoute } from "./authentication-route";
import { registerChacronaRoutes } from "@/api/v1/controllers/chacrona/chacrona.controller";
import { registerLenhaRoutes } from "@/api/v1/controllers/lenha/lenha.controller";
import { registerMaririRoutes } from "@/api/v1/controllers/mariri/mariri.controller";
import { registerNucleosRoutes } from "@/api/v1/controllers/nucleos/nucleos.controller";
import { registerPreparosRoutes } from "@/api/v1/controllers/preparos/preparos.controller";
import { registerSessoesRoutes } from "@/api/v1/controllers/sessoes/sessoes.controller";

export default async function Routing() {
  authenticationRoute(app);
  userRoute(app);
  app.register(registerChacronaRoutes)
  app.register(registerLenhaRoutes)
  app.register(registerMaririRoutes)
  app.register(registerNucleosRoutes)
  app.register(registerPreparosRoutes)
  app.register(registerSessoesRoutes)
}
