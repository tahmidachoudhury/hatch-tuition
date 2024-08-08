//add images of exam boards here
"use-client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Box from "@mui/material/Box"
import Image from "next/image"
import { Typography } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const examboards = [
  "DFE.png",
  "AQA.png",
  "national-curriculum.png",
  "OCR.png",
  "pearson-edexcel.png",
  "wjec.png",
]

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <ArrowBackIosNewIcon
      className={className}
      style={{ ...style, display: "block", cursor: "pointer" }}
      onClick={onClick}
    />
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{ ...style, display: "block", cursor: "pointer" }}
      onClick={onClick}
    />
  )
}

const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export default function ExamBoards() {
  return (
    <Box>
      <Box sx={{ width: "80%", mx: "auto", py: 10 }}>
        <Box>
          <h1>Tailored Towards All Exam Boards</h1>
          <Typography width={{ xs: "100%", md: "40%" }}>
            All courses at Hatch are tailored towards each students specific
            exam boards. With decades of experience in education, Hatch is able
            to ensure all details of the respective specification are met!
          </Typography>
        </Box>
        <Slider {...settings}>
          {examboards.map((board, index) => (
            <Box key={index}>
              <img
                src={`/images/${board}`}
                alt={board}
                style={{ objectFit: "contain", margin: "auto" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
