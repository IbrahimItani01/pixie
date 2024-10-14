// eslint-disable-file no-use-before-define
"use client";
import { cn } from "@/lib/utils";
import { ClerkLoaded, ClerkLoading, useUser } from "@clerk/nextjs";
import { Spinner } from "@nextui-org/spinner";
import Image from "next/image";
import React from "react";

type Props = {
  content?: string;
  order: number;
  withLogo?: boolean;
  forPixie?: boolean;
};

const TextBox = ({ content, order, withLogo, forPixie }: Props) => {
  const { user } = useUser();

  return (
    <div
      className={cn(
        "rounded-xl p-4 my-4 text-white flex items-center gap-x-3",
        order % 2 === 0 && "bg-gradientFirst ml-[35%] mr-5",
        order % 2 !== 0 && "bg-gradientSecond mr-[35%] ml-5",
        order === 3 && "mr-5"
      )}
    >
      {withLogo && (
        <>
          <ClerkLoading>
            <Spinner />
          </ClerkLoading>
          <ClerkLoaded>
            <Image
            // @ts-expect-error needed
              src={user?.imageUrl}
              width={30}
              height={30}
              alt="User Profile"
              className="rounded-full"
            />
          </ClerkLoaded>
        </>
      )}
      {forPixie && (
        <>
          <Image
            src="/logo.svg"
            width={30}
            height={30}
            alt="Pixie Logo"
            className=" bg-white rounded-full"
          />
        </>
      )}
      <p>{content}</p>
      {order === 3 && (
        <div className="flex justify-around w-full">
          <div className="flex flex-col gap-y-2 items-center">
            <Image
              src="/dev-icon.svg"
              alt="Developers"
              width={30}
              height={30}
            />
            <p>Code</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <Image src="/image-icon.svg" alt="Images" width={30} height={30} />
            <p>Images</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <Image src="/chat-icon.svg" alt="Chatting" width={30} height={30} />
            <p>Chatbot</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextBox;
