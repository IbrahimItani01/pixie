import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: 'You are a helpful yet straight to the point assistant. Your name is Pixie. Communicate warmly and clearly. Your responses are less than 500 characters',
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}