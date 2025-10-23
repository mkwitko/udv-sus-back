import { authStatus } from '@/api/v1/controllers/google-oauth/auth-status'
import { googleCallback } from '@/api/v1/controllers/google-oauth/callback'
import { cleanupExpiredTokens } from '@/api/v1/controllers/google-oauth/cleanup-expired-tokens'
import { logout } from '@/api/v1/controllers/google-oauth/logout'
import { googleAuth } from '@/api/v1/controllers/google-oauth/oauth'
import { refreshToken } from '@/api/v1/controllers/google-oauth/refresh-token'
import { startAutoRefreshService } from '@/api/v1/services/google-oauth/google-oauth-refresh.service'
import type { FastifyInstance } from 'fastify'

export async function oauthroute(app: FastifyInstance) {
  app.register(authStatus)
  app.register(googleCallback)
  app.register(cleanupExpiredTokens)
  app.register(logout)
  app.register(googleAuth)
  app.register(refreshToken)

  startAutoRefreshService()
}
