import { refreshTokenService } from "@/api/v1/services/authentication/refresh-token-service";
import { setHttpOnlyCookie } from "@/api/v1/services/authentication/set-http-only-cookie";
import { UnauthorizedError } from "@/errors/unauthorized-error";
import type { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export const authenticationMiddleware = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook("preHandler", async (request, reply) => {
    const accessToken = request.cookies.accessToken;
    const refreshToken = request.cookies.refreshToken;

    try {
      if (!accessToken) {
        // Se não tem accessToken, tenta com refreshToken
        if (!refreshToken) {
          throw new UnauthorizedError("Nenhum token fornecido");
        }

        // Se não tem accessToken, vamos forçar um refresh
        throw new TokenExpiredError("Token de acesso ausente", new Date());
      }

      // 🔐 Verifica o access token normalmente
      request.user = await app.jwt.verify(accessToken);
      return; // tudo certo, segue a request

    } catch (error) {
      // ============================================
      // Caso 1: Token expirado → tenta refresh
      // ============================================
      if (error instanceof TokenExpiredError) {
        if (!refreshToken) {
          throw new UnauthorizedError("Token expirado e sem refresh token");
        }

        try {
          // Verifica se o refresh token é válido
          const decodedRefresh = await app.jwt.verify(refreshToken);

          // Gera novos tokens
          const {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          } = await refreshTokenService(refreshToken);

          // Atualiza os cookies
          setHttpOnlyCookie(reply, newAccessToken, newRefreshToken);

          // Define o novo usuário no request
          request.user = await app.jwt.verify(newAccessToken);

          return;
        } catch (refreshError) {
          request.log.warn({ err: refreshError }, "Falha ao renovar token");
          throw new UnauthorizedError("Token de atualização inválido ou expirado");
        }
      }

      // ============================================
      // Caso 2: Token inválido ou adulterado
      // ============================================
      if (error instanceof JsonWebTokenError) {
        throw new UnauthorizedError("Token inválido");
      }

      // ============================================
      // Caso 3: Qualquer outro erro inesperado
      // ============================================
      request.log.error({ err: error }, "Erro no middleware de autenticação");
      throw new UnauthorizedError("Falha ao autenticar usuário");
    }
  });
});
