import TextBox from "@/components/TextBox";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col justify-center w-[95%] h-[85%] mx-auto">
      <TextBox order={2} withLogo={true} content="Hey Pixie, tell me what can you do?" />
      <TextBox order={1} forPixie={true} content="I can answer your deepest questions 🤔" />
      <TextBox order={2} withLogo={true}  content="What else?" />
      <TextBox order={5} forPixie={true} content="I can be your Picasso 🎨" />
      <TextBox order={2} withLogo={true} content="and?" />
      <TextBox order={5} forPixie={true} content="Mmmm... Ah yes! Your programming buddy 👨🏼‍💻" />
    </div>
  );
};

export default DashboardPage;
