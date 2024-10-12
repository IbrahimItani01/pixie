"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const {isSignedIn} = useAuth();
  return (
    <>
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
        {isSignedIn?(
             <Button size="lg" className="font-semibold border-b-4 border-b-gradientFirst active:border-b-0">
             <Link href="/dashboard">
                To Dashboard
             </Link>
           </Button>
        ):(
          <>
            <Button variant="ghost" size="lg" className="font-semibold border-b-4 border-b-gradientFirst active:border-b-0">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
            <Button size="lg" className="font-semibold border-b-4 border-b-gradientFirst active:border-b-0">
              <Link href="/sign-up">
                Get Started
              </Link>
            </Button>
          </>
        )}
      </div>
    </>
  );
}
