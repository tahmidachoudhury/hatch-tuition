//add images of exam boards here
"use-client"

import { WidthFull } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import Image from "next/image"

const imgStyle = {
  height: "140px",
  marginLeft: "0px",
}

const examboards = [
  "DFE.png",
  "AQA.png",
  "national-curriculum.png",
  "OCR.png",
  "pearson-edexcel.png",
  "wjec.png",
]

export default function ExamBoards() {
  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <Box>
          <h1>Tailored Towards All Exam Boards</h1>
          <Typography width={{ xs: "100%", md: "40%" }}>
            All courses at Hatch are tailored towards each students specific
            exam boards. With decades of experience in education, Hatch is able
            to ensure all details of the respective specification are met!
          </Typography>
        </Box>
        <Box
          display="grid"
          sx={{
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          }}
        >
          {examboards.map((board, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "200px",
                height: "200px",
                margin: "0 10px",
              }}
            >
              <Image
                key={index}
                layout="fill"
                objectFit="contain"
                src={`/images/${board}`}
                alt={board}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
