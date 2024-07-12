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
    <Box display="flex" justifyContent="center">
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="grid"
        gridTemplateColumns={{ md: "1fr 1fr" }}
        noValidate
        sx={{ mt: 1, width: { xs: 0.8, md: 0.6, lg: 0.5 } }}
      >
        <Box
          gridColumn={{ xs: "span 2" }}
          display={{ xs: "block", sm: "flex" }}
        >
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
        <Box gridColumn={{ xs: "span 2" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Text"
            name="text"
            type="text"
            multiline
            rows={3}
            maxRows={4}
          />
        </Box>
        <Box gridColumn={{ xs: "span 2" }}>
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
    </Box>
  )
}

export default ContactForm
