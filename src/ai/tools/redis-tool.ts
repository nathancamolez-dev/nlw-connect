import { tool } from 'ai'
import z from 'zod'
import { redis } from '../../redis/client'

export const redisTool = tool({
  description:
    `Make a command on redis to search for informations about a system of reference, like number of clicks, number of indications and number of invites by a user.

Can be only used for make search operations , cannot execute any type of write operaitons.


You can search :

- A hash called "referral:access-count" that contains a number of clicks/accesss of a link of indication made by every user, in the format of {"SUBSCRIBER_ID": NUMBER_OF_CLICKS} WHERE SUBSCRIBER_ID is located on postgres.
- a zset called "referral:ranking" that contains the total number of invites/indications made by every user, where the score is the invites quantity, and the content is the subscriber_id that is located on postgres. 
`.trim(),
  parameters: z.object({
    command: z
      .string()
      .describe('The command to be executed, like GET,HGET,ZREVRANGE'),
    args: z
      .array(z.string())
      .describe('Args that will como after the command of redis'),
  }),
  execute: async ({ command, args }) => {
    const result = await redis.call(command, args)

    return JSON.stringify(result)
  },
})
