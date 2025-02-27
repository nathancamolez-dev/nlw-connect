interface AnswerUserMessageParams {
  message: string
}

export async function answerUserMessage({ message }: AnswerUserMessageParams) {
  return {
    message,
  }
}
