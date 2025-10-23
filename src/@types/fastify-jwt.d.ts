import "@fastify/jwt";

declare module "@fastify/jwt" {
  export interface FastifyJWT {
    payload: {
      userId: string;
    };
  }
}

import "fastify";

declare module "fastify" {
  interface FastifyRequest {
    googleToken?: string;
  }
}

