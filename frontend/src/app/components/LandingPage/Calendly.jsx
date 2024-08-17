"use client"

import React, { useEffect } from "react"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <Box sx={{ pt: 5 }}>
      <Box display="flex" justifyContent="center">
        <Typography variant="h1" sx={{ pb: 4 }}>
          Book a Call With Us.
        </Typography>
      </Box>
      <Box
        className="calendly-inline-widget"
        id="calendly-widget"
        data-url="https://calendly.com/online-hatchtuition/30min"
        sx={{ minWidth: "320px", height: { xs: "820px", md: "700px" } }}
      ></Box>
    </Box>
  )
}

export default Calendly
