"use client";

import { Attachment, ToolInvocation } from "ai";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import TextBox from "./TextBox";

export const Message = ({
  role,
  content,
}: {
  role: string;
  content: string | ReactNode;
  toolInvocations: Array<ToolInvocation> | undefined;
  attachments?: Array<Attachment>;
}) => {
  return (
    <motion.div
      className={`flex flex-row  w-full md:w-[500px] md:px-0 first-of-type:pt-10`}
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >

      <div className="flex flex-col gap-2 w-full">
        {content && (
          <div className="flex flex-col gap-4">
            <TextBox content={content as string} order={role === "assistant" ? 1:2} withLogo={role !== "assistant"&&true} forPixie={role === "assistant"&&true}/>
          </div>
        )}

      </div>
    </motion.div>
  );
};
