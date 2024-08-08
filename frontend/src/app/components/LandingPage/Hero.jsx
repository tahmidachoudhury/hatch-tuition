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
      <Typography variant="h4">For students. By students.</Typography>
      <Typography variant="h1">Reach your potential.</Typography>

      <Box
        display="grid"
        gridTemplateColumns="repeat(5, minmax(0, 1fr))"
        gap={6}
        sx={{
          p: 3,
          position: "absolute",
          bottom: 30,
          width: "fit-content",
          backgroundColor: "#d1e9f1",
          border: "8px solid #d1e9f1",
          borderRadius: "3rem",
          px: 5,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <img
            src="//c.superprof.com/img/ico/mat/13.svg"
            style={{ width: "30px", height: "30px" }}
          />
          <Typography>Maths</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <img
            src="//c.superprof.com/img/ico/mat/10.svg"
            style={{ width: "30px", height: "30px" }}
          />
          <Typography>Biology</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <img
            src="//c.superprof.com/img/ico/mat/15.svg"
            style={{ width: "30px" }}
          />
          <Typography>Chemistry</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <img
            src="//c.superprof.com/img/ico/mat/14.svg"
            style={{ width: "30px" }}
          />
          <Typography>Physics</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <img
            src="//c.superprof.com/img/ico/mat/260.svg"
            style={{ width: "30px" }}
          />
          <Typography>English</Typography>
        </Box>
      </Box>
    </Box>
  )
}
