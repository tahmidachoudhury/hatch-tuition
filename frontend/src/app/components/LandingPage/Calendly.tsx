"use client"

import React, { useEffect } from "react"

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
      style={{ minWidth: "320px", height: "700px", overflow: "hidden" }}
    ></div>
  )
}

export default Calendly
