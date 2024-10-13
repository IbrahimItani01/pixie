"use client";

import { Attachment, ChatRequestOptions, CreateMessage, Message } from "ai";
import React, {
  useRef,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { toast } from "sonner";



import { X } from "lucide-react"
import { ArrowUp } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";


export function MultimodalInput({
  input,
  setInput,
  isLoading,
  stop,
  attachments,
  setAttachments,
  handleSubmit,
}: {
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  stop: () => void;
  attachments: Array<Attachment>;
  setAttachments: Dispatch<SetStateAction<Array<Attachment>>>;
  messages: Array<Message>;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions,
  ) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const submitForm = useCallback(() => {
    handleSubmit(undefined, {
      experimental_attachments: attachments,
    });

    setAttachments([]);
  }, [attachments, handleSubmit, setAttachments]);
  

  return (
    <div className="relative w-full flex flex-col">
      <Textarea
        ref={textareaRef}
        placeholder="Send a message..."
        value={input}
        onChange={handleInput}
        className="min-h-[24px] overflow-hidden resize-none rounded-lg text-base bg-muted"
        rows={3}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            if (isLoading) {
              toast.error("Please wait for the model to finish its response!");
            } else {
              submitForm();
            }
          }
        }}
      />

      {isLoading ? (
        <Button
          className="rounded-full p-1.5 h-fit absolute bottom-2 right-2 m-0.5"
          onClick={(event) => {
            event.preventDefault();
            stop();
          }}
        >
          <X/>
        </Button>
      ) : (
        <Button
          className="rounded-full p-1.5 h-fit absolute bottom-2 right-2 m-0.5"
          onClick={(event) => {
            handleSubmit(event);
          }}
          disabled={input.length === 0}
        >
          <ArrowUp size={14} />
        </Button>
      )}
     
    </div>
  );
}
