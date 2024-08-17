import * as React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { Box, Typography } from "@mui/material"

const StyledTableRow = styled(Box)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#224162",
    borderRadius: "1rem",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "inherit",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

const rows = [
  "Weekly updates on in-class performance",
  "Homework review each lesson",
  "Affordable price packages",
  "Guaranteed progress",
  "Termly progress tests",
]

export default function CustomizedTables() {
  return (
    <>
      <Box
        sx={{
          aspectRatio: 960 / 300,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="layer1"
      ></Box>
      <Box textAlign="center" pb={20} bgcolor="#001220">
        <Typography variant="h1" color="#ffc650">
          What we offer
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
          <Paper
            sx={{
              width: { xs: "90%", md: "60%" },
              backgroundColor: "inherit",
            }}
          >
            {rows.map((row) => (
              <StyledTableRow
                display="flex"
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  p: { xs: 1.5, sm: 3 },
                }}
                key={row}
              >
                <Typography sx={{ flex: 1 }} color="white">
                  {row}
                </Typography>
                <CheckCircleIcon
                  sx={{
                    flex: 2,
                    alignSelf: "center",
                    py: { xs: 2, sm: 0 },
                    color: "white",
                  }}
                />
              </StyledTableRow>
            ))}
          </Paper>
        </Box>
      </Box>
    </>
  )
}
