// eslint-disable-file no-use-before-define
"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { Spinner } from "@nextui-org/spinner";

const ContactFormPage = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_rdy7x44", "template_7jg696r", form?.current, {
        publicKey: "w4cOHMLB4v3LHUUFd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      {isSuccess ? (
        <div className=" flex flex-col items-center justify-center space-y-4 animate-in fade-in-50 duration-500">
          <div className="text-4xl">🎉</div>
          <h2 className="text-2xl font-bold text-gradientFirst">
            Message Sent!
          </h2>
          <p className="text-gray-600 w-[95%] mx-auto text-center">
            Thanks for reaching out! We&apos;ll get back to you faster than a 🐆
            chasing its dinner! 😄
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                required
                className="min-h-[100px]"
              />
            </div>
            {loading ? (
              <Button type="submit" className="w-full" disabled>
                <Spinner size="sm" color="secondary" />
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            )}
          </form>
        </>
      )}
    </>
  );
};
export default ContactFormPage;
