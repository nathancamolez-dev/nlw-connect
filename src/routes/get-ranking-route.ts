import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getRanking } from '../functions/get-ranking'

export const getRankingRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/ranking',
    {
      schema: {
        summary: 'Get ranking',
        tags: ['referral'],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                name: z.string(),
                position: z.number(),
              })
            ),
          }),
        },
      },
    },
    async request => {
      const { rankingWithNames } = await getRanking()

      return {
        ranking: rankingWithNames,
      }
    }
  )
}
