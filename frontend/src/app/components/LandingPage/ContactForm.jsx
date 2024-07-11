"use client"

import { Box, Button, TextField } from "@mui/material"
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(2, minmax(0, 1fr))", // 3 columns on small screens
        md: "repeat(4, minmax(0, 1fr))", // 4 columns on medium screens
      }}
      noValidate
      sx={{ mt: 1 }}
    >
      <Box gridColumn={{ xs: "span 1", sm: "span 4" }}>
        <Box display="flex">
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Full Name"
            type="name"
            id="name"
            autoComplete="name"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Box>
      </Box>
      <Box gridColumn={{ xs: "span 1", sm: "span 4" }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="text"
          label="Text"
          name="text"
          type="text"
          multiline
          rows={2}
          maxRows={4}
        />
      </Box>
      <Box gridColumn={{ xs: "span 1", sm: "span 4" }}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Contact us
        </Button>
      </Box>
    </Box>
  )
}

export default ContactForm
