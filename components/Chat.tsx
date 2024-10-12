"use client";

import { useChat } from "ai/react";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import TextBox from "./TextBox";

export default function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  });
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsTyping(true);
    handleSubmit(e);
    setIsTyping(false);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const renderResponse = () => {
    return (
      <ScrollArea ref={scrollAreaRef} className="h-full pr-4">
        <div>
          {messages.map((m) => (
            <TextBox
              key={m.id}
              withLogo={m.role === "user" && true}
              forPixie={m.role !== "user" && true}
              content={m.content}
              order={m.role === "user" ? 2 : 1}
            />
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="flex items-center bg-muted py-2 px-4 rounded-2xl">
                <div className="dot-flashing"></div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    );
  };

  return (
    <Card ref={chatContainerRef} className="w-full max-w-2xl mx-auto h-[600px] flex flex-col">
      <CardHeader className="flex items-center">
        <CardTitle>
          <Image src="/logo.svg" width={65} height={65} alt="Pixie Logo" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        {renderResponse()}
      </CardContent>
      <CardFooter>
        <form onSubmit={onSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Chat with Pixie..."
            className="flex-grow"
          />
          <Button type="submit" size="icon" disabled={isTyping}>
            <SendHorizonal className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}