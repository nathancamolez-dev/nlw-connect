# NLW - connect

Node.js api for an application that holds subscriptions and can make a
referral link for futher subscriptions with referral links

## Dependencies

- [fastify](https://www.fastify.io/)
- [drizzle-orm](https://orm.drizzle.team/)
- [postgres](https://www.postgresql.org/)
- [zod](https://github.com/colinhacks/zod)
- [ioredis](https://github.com/luin/ioredis)
- [fastify-cors](https://github.com/fastify/fastify-cors)
- [fastify-swagger](https://github.com/fastify/fastify-swagger)
- [fastify-type-provider-zod](https://github.com/fastify/fastify-type-provider-zod)
- [fastify-swagger-ui](https://github.com/fastify/fastify-swagger-ui)

### Setup

Must create an environment file with the following variables:

```NODE_ENV=
PORT=
POSTGRES_URL=
REDIS_URL=
WEB_URL=
```

Next run `npm install` for install all needed dependencies for the api
