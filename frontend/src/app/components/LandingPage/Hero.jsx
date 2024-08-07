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
        height: "50vh",
        background: `linear-gradient(#FFFFFF, #a4d5e4)`,
        borderRadius: "3rem",
      }}
    >
      <Typography>For students. By students. Reach your potential.</Typography>
      <Box
        display="flex"
        gap={2}
        sx={{ p: 3, backgroundColor: "#d1e9f1", borderRadius: "3rem", px: 5 }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconButton>
            <SquareFootIcon fontSize="large" />
          </IconButton>
          <Typography>Math</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconButton>
            <BiotechIcon fontSize="large" />
          </IconButton>
          <Typography>Science</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconButton>
            <LibraryBooksIcon fontSize="large" />
          </IconButton>
          <Typography>English</Typography>
        </Box>
      </Box>
    </Box>
  )
}
