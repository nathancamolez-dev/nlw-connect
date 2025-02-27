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
- [tsup](https://github.com/evanw/tsup)

### Setup

Must create an environment file with the following variables:

```NODE_ENV=
PORT=
POSTGRES_URL=
REDIS_URL=
WEB_URL=
OPENAI_API_KEY=
```

Next run `npm install` for install all needed dependencies for the api

In deploy situation you can run `npm run build`
that uses tsup for faster building in js

### AI

The AI is made by [ai-sdk](https://sdk.vercel.ai/docs/getting-started/nodejs)

The model used i gpt4.0- , you have to make a account on openai to generate the api key.
Because of this the route for the AI is commented.
