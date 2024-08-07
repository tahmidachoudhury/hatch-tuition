"use client"

import { Box, IconButton, Typography } from "@mui/material"
import SquareFootIcon from "@mui/icons-material/SquareFoot"
import BiotechIcon from "@mui/icons-material/Biotech"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"

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
        display="flex"
        gap={6}
        sx={{
          p: 3,
          position: "absolute",
          bottom: 30,
          width: "fit-content",
          backgroundColor: "#d1e9f1",
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
            style={{ width: "20px", height: "20px" }}
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
            src="//c.superprof.com/img/ico/mat/260.svg"
            style={{ width: "20px" }}
          />
          <Typography>Science</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="end"
        >
          <img
            src="//c.superprof.com/img/ico/mat/15.svg"
            style={{ width: "20px" }}
          />
          <Typography>English</Typography>
        </Box>
      </Box>
    </Box>
  )
}
