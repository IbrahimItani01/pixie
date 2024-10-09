import Image from "next/image";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[85%] gap-y-[100px] mx-auto">
      <div className="flex flex-col items-center gap-x-2">
        <Image src="/chat-logo.svg" width={40} height={40} alt="ChatBot Icon" />
        <p className="text-xl">Answer your deepest questions with pixie 🤔 </p>
      </div>
      <div className="flex flex-col items-center gap-x-2 ">
        <Image src="/image-logo.svg" width={40} height={40} alt="Image Icon" />
        <p className="text-xl">Let Pixie become your Picasso 🎨</p>
      </div>
      <div className="flex flex-col items-center gap-x-2">
        <Image src="/code-logo.svg" width={40} height={40} alt="Code Icon" />
        <p className="text-xl">Develop at ease with Pixie 👨🏼‍💻</p>
      </div>
    </div>
  );
};

export default DashboardPage;
