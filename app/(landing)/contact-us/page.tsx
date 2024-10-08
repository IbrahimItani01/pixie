"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    title: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ email: '', name: '', title: '', message: '' })
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Title of Message</Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Message Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[100px]"
          />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </>
  )
}