"use client"

import { Box, IconButton, Typography } from "@mui/material"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

export default function Hero() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "55vh",
        background: `linear-gradient(#FFFFFF, #a4d5e4)`,
        borderRadius: "3rem",
        position: "relative",
        pb: "20px",
      }}
    >
      <Typography variant="h4">
        Catching up? Getting ahead? Preparing for exams?
      </Typography>
      <Typography variant="h1">Reach your potential.</Typography>
    </Box>
  )
}
