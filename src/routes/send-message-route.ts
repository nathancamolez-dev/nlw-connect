import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { answerUserMessage } from '../functions/answer-user-message'

export const sendMessageRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/messages',
    {
      schema: {
        summary: 'Send message to ai client',
        tags: ['AI'],
        body: z.object({
          message: z.string(),
        }),
        response: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { message } = request.body

      const { message: userAnswer } = await answerUserMessage({ message })

      return {
        message: userAnswer,
      }
    }
  )
}
