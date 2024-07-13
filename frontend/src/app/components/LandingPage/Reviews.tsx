"use client"

import React from "react"
import reviews from "../../data/reviews.json"
import { Box, Paper, Typography } from "@mui/material"

export default function ReviewSection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ mt: "62px" }}
    >
      <Box>
        <Typography>Testimonials</Typography>
      </Box>
      <Box>
        <Typography>Students love Hatch</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr" },
          gap: 2,
          width: "40%",
          py: 4,
        }}
      >
        {reviews.map((item, index) => (
          <Paper
            elevation={3}
            square={false}
            key={index}
            sx={{
              px: 4,
              py: 2,
              background: "rgb(233, 234, 251)",
            }}
          >
            <Typography>{item.name}</Typography>
            <Typography>{item.year_group}</Typography>
            <Typography>{item.comment}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}
