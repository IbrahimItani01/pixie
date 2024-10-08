import TextBox from '@/components/TextBox'
import React from 'react'

const AboutUs = () => {
  return (
    <section key="body">
        <div className="flex flex-col space-y-4 mt-3 w-full items-center justify-center">
          <h1 className="text-3xl font-semibold">About Pixie</h1>
          <div className="w-[95%]">
            <TextBox content="Pixie is an AI-powered SaaS companion designed to enhance your
              creativity and productivity." order={1}/>

            <TextBox content=" Pixie simplifies the process
              with intuitive, powerful tools." order={2}/>
            
            <TextBox order={3}/>
          </div>
        </div>
      </section>
  )
}

export default AboutUs