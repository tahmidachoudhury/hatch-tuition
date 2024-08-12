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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "lightgrey",
    borderRadius: "100px",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

function createData(name, calories) {
  return { name, calories }
}

const rows = [
  createData("Weekly updates on in-class performance", <CheckCircleIcon />),
  createData("Homework review each lesson", <CheckCircleIcon />),
  createData("Affordable price packages", <CheckCircleIcon />),
  createData("Guaranteed progress", <CheckCircleIcon />),
  createData("Termly progress tests", <CheckCircleIcon />),
]

export default function CustomizedTables() {
  return (
    <Box textAlign="center" py={10}>
      <Typography variant="h1">What we offer</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        <TableContainer
          component={Paper}
          sx={{
            width: { xs: "95%", md: "50%" },
          }}
        >
          <Table aria-label="customized table">
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    align="center"
                    style={{
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                  >
                    <Typography variant="h5">{row.name}</Typography>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    style={{
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
