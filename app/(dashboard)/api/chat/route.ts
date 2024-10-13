import { convertToCoreMessages, Message, streamText } from "ai";

import { customModel } from "@/ai";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const {messages }: {messages: Array<Message> } =
    await request.json();

  const session = await auth();

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const coreMessages = convertToCoreMessages(messages);

  const result = await streamText({
    model: customModel,
    system:
      "You are a helpful yet straight to the point assistant. Your name is Pixie. Communicate warmly and clearly. Your responses are less than 500 characters",
    messages: coreMessages,
    maxSteps: 5,

    experimental_telemetry: {
      isEnabled: true,
      functionId: "stream-text",
    },
  });

  return result.toDataStreamResponse({});
}

