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
          display: "flex",
          flexFlow: { xs: "row wrap", sm: "column wrap" },
          alignItems: "center",
          py: 4,
          width: { xs: "80%", sm: "60%", lg: "50%" },
          height: { xs: "auto", sm: "2200px", md: "1500px", lg: "1200px" },
          gap: 2,
        }}
      >
        {reviews.map((item, index) => (
          <Paper
            elevation={3}
            square={false}
            key={index}
            sx={{
              px: 4,
              width: { xs: "100%", md: "50%" },
              py: 2,
              background: "rgb(233, 234, 251)",
            }}
          >
            <Box display="flex" flexDirection="column">
              <Typography variant="subtitle1" gutterBottom>
                {item.comment}
              </Typography>
              <Box justifySelf="flex-end">
                <Typography variant="body2" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.year_group}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}
