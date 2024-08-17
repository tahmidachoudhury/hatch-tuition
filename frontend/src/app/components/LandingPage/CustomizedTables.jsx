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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#a5d4e4",
    color: "#a5d4e4",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(Box)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f2f2f2",
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
    <Box textAlign="center" py={10}>
      <Typography variant="h1">What we offer</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        <Paper
          sx={{
            width: { xs: "90%", md: "60%" },
          }}
        >
          {rows.map((row) => (
            <StyledTableRow
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                p: { xs: 1.5, sm: 3 },
              }}
            >
              <Typography sx={{ flex: 1 }}>{row}</Typography>
              <CheckCircleIcon
                sx={{ flex: 2, alignSelf: "center", py: { xs: 2, sm: 0 } }}
              />
            </StyledTableRow>
          ))}
        </Paper>
      </Box>
    </Box>
  )
}
