import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Box } from "@mui/material"
import Carousel from "react-multi-carousel"

function SimpleSlider() {
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
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ backgroundColor: "grey" }}
    >
      <Box sx={{ px: 2, m: 0, width: "80%" }}>
        <Carousel responsive={responsive}>
          <Box>
            <img
              src={`/images/AQA.png`}
              alt="AQA.png"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <div>
            <img src={`/images/AQA.png`} style={{ objectFit: "contain" }} />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Carousel>
      </Box>
    </Box>
  )
}

export default SimpleSlider
