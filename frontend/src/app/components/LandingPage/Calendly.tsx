"use client"

import React, { useEffect } from "react"
import Box from "@mui/material/Box"

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/online-hatchtuition/30min"
      data-resize="true"
      style={{ minWidth: "320px", height: "700px", overflow: "hidden" }}
    ></div>
  )
}

export default Calendly
