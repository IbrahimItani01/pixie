"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
        <div className=" mx-auto items-center flex flex-col bg-white w-[95%] gap-y-10 py-10 rounded-sm max-w-screen-lg">
          <div className="text-3xl text-center flex flex-col">
            <h1>Your AI Companion for: </h1>
            <span className="text-gradientFirst">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Text!",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Images!",
                  1000,
                  "Code!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          <div className=" flex flex-col gap-y-4 w-2/5 max-w-screen-sm">
            <Button variant="ghost" size="lg" className="font-semibold">
              Login
            </Button>
            <Button size="lg" className="font-semibold">Get Started</Button>
          </div>
        </div>
  );
}
