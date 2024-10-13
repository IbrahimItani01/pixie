"use client";

import { useChat } from "ai/react";
import { useRef, useEffect } from "react";
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
import Link from "next/link";

export default function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

 

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
        </div>
      </ScrollArea>
    );
  };

  return (
    <Card ref={chatContainerRef} className="w-full max-w-2xl mx-auto h-[600px] flex flex-col">
      <CardHeader className="flex items-center">
        <CardTitle>
          <Link href="/dashboard">
            <Image src="/logo.svg" width={65} height={65} alt="Pixie Logo" />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        {renderResponse()}
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Chat with Pixie..."
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <SendHorizonal className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}