import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number(),
  ENVIRONMENT: z.enum(["development", "production"]).default("production"),
  DATABASE_URL: z.string(),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  REDIRECT_URI: z.string().url(),
  EXPO_SCHEME: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.log(
    `Invalid environment variables: ${JSON.stringify(
      _env.error.flatten().fieldErrors
    )}`
  );
  throw new Error(
    `Invalid environment variables: ${_env.error.flatten().fieldErrors}`
  );
}

export const env = _env.data;
