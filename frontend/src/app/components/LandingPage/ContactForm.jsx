"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      alert("Message sent!")
    } else {
      alert("Failed to send message.")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Message"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
