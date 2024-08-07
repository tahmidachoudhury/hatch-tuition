import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Box } from "@mui/material"

function SimpleSlider() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ backgroundColor: "grey" }}
    >
      <Box sx={{ px: 2, m: 0, width: "80%" }}>
        <Slider {...settings}>
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
        </Slider>
      </Box>
    </Box>
  )
}

export default SimpleSlider
