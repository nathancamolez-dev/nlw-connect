import { tool } from 'ai'
import z from 'zod'
import { pg } from '../../drizzle/client'

export const postgresTool = tool({
  description: `
            Make queries on Postgres database to search for informations.

            Is just allowed to make select operations, is not allow to make write operations.

            Tables:
             """
              CREATE TABLE subscriptions (
                id uuid PRIMARY KEY,
                name text NOT NULL,
                email text NOT NULL,
                created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
              );
            """

            All operations should return 50 itens at most.
        `.trim(),
  parameters: z.object({
    query: z.string().describe('The query to be executed'),
    params: z.array(z.string()).describe('The params of the query'),
  }),
  execute: async ({ query, params }) => {
    const result = await pg.unsafe(query, params)

    return JSON.stringify(result)
  },
})
