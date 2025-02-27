import { generateText } from 'ai'
import { openai } from '../ai/openai'
import { postgresTool } from '../ai/tools/postgres-tool'
import { redisTool } from '../ai/tools/redis-tool'

interface AnswerUserMessageParams {
  message: string
}

export async function answerUserMessage({ message }: AnswerUserMessageParams) {
  const answer = await generateText({
    model: openai,
    prompt: message,
    tools: {
      postgresTool,
      redisTool,
    },
    system: `
        You are a helpful AI assistant. You know how to answer questions about an event of programming.
        
        In the answer that you generate, show only the information that the user asked for, without any addictional text.
      
        The response always must be in markdown format (without include \`\`\` in the beginning or in the end).
    `.trim(),
    maxSteps: 10,
  })

  return {
    message: answer.text,
  }
}
