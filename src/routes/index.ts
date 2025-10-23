import { app } from "@/app";
import { authenticationRoute } from "./authentication-route";
import { registerChacronaRoutes } from "./chacrona-route";
import { registerLenhaRoutes } from "./lenha-router";
import { registerMaririRoutes } from "./mariri-router";
import { registerNucleosRoutes } from "./nucleos-route";
import { oauthroute } from "./oauth-route";
import { registerPreparosRoutes } from "./preparos-route";
import { registerSessoesRoutes } from "./sessoes-route";
import { sheetsRoute } from "./sheets-route";
import { userRoute } from "./user-route";

export default async function Routing() {
  authenticationRoute(app);
  userRoute(app);
  
  app.register(registerChacronaRoutes)
  app.register(registerLenhaRoutes)
  app.register(registerMaririRoutes)
  app.register(registerNucleosRoutes)
  app.register(registerPreparosRoutes)
  app.register(registerSessoesRoutes)
  app.register(sheetsRoute)
  app.register(oauthroute)
}
