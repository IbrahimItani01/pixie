import TextBox from '@/components/TextBox'
import React from 'react'

const AboutUs = () => {
  return (
    <section key="body">
          <div className="w-[95%] mx-auto">
            <TextBox content="Pixie is an AI-powered SaaS companion designed to enhance your
              creativity and productivity." order={1}/>

            <TextBox content=" Pixie simplifies the process
              with intuitive, powerful tools." order={2}/>
            
            <TextBox order={3}/>
          </div>
      </section>
  )
}

export default AboutUs