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
    backgroundColor: "rgba(34, 65, 98, 0.4)",
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
    <Box position="relative">
      <Box
        sx={{
          aspectRatio: { xs: 120 / 100, md: 960 / 300 },
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 1,
        }}
        className="layer1"
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "50vw",
        }}
      >
        <svg
          style={{
            position: "absolute",
            bottom: 0,
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        >
          <circle cx="80%" cy="14%" r="10vw" style={{ fill: "#FAD02C" }} />
        </svg>
      </Box>
      <Box textAlign="center" pb={20} bgcolor="#001220" position="relative">
        <Typography variant="h1" color="#ffc650">
          What we offer
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
          <Paper
            sx={{
              width: { xs: "90%", md: "60%" },
              backgroundColor: "inherit",
              zIndex: 1,
            }}
          >
            {rows.map((row) => (
              <StyledTableRow
                display="flex"
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                  p: { xs: 1.5, sm: 3 },
                  zIndex: 1,
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
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: { xs: 0, md: "20%" },
          height: "100px",
          width: "100px",
        }}
      >
        <svg
          style={{
            position: "absolute",
            bottom: 0,
            top: 0,
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        >
          <polygon points="75,100 25,100 50,50" style={{ fill: "#FFFFFF" }} />
        </svg>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: "100px",
          width: "100px",
          transform: "rotate(180deg)",
        }}
      >
        <svg
          style={{
            position: "absolute",
            bottom: 0,
            top: 0,
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        >
          <polygon points="75,100 25,100 50,50" style={{ fill: "#FAD02C" }} />
        </svg>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: { xs: "90vw", md: "30vw" },
          left: 0,
          bottom: { xs: 0, md: "30%" },
          zIndex: 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0"
          y="0"
          viewBox="50 0 100 100"
          xmlSpace="preserve"
          style={{
            filter:
              "invert(100%) sepia(0%) saturate(1%) hue-rotate(265deg) brightness(103%) contrast(101%)",
            position: "absolute",
            bottom: 0,
            width: "100%",
            opacity: 0.7,
            zIndex: 0,
          }}
        >
          <path d="M25.2,17.6l-7.6,7.6C19.7,22.3,22.3,19.7,25.2,17.6z" />
          <path d="M32.5,13.3L13.3,32.5c0.5-1.1,1-2.1,1.6-3.1l14.4-14.4C30.3,14.3,31.4,13.8,32.5,13.3z" />
          <path d="M37.2,11.6L11.6,37.2c0.2-0.8,0.5-1.6,0.8-2.3l22.5-22.5C35.7,12.1,36.4,11.8,37.2,11.6z" />
          <path d="M41.1,10.7L10.7,41.1c0.1-0.7,0.2-1.3,0.4-2l28-28C39.8,11,40.5,10.8,41.1,10.7z" />
          <path d="M44.6,10.3L10.3,44.6c0-0.6,0.1-1.2,0.2-1.8l32.4-32.4C43.4,10.4,44,10.3,44.6,10.3z" />
          <path d="M47.7,10.2L10.2,47.7v-0.2c0-0.5,0-0.9,0-1.4l35.9-35.9c0.5,0,0.9,0,1.4,0H47.7z" />
          <path d="M50.6,10.3L10.3,50.6c0-0.5-0.1-1-0.1-1.5l38.9-38.9C49.7,10.2,50.2,10.3,50.6,10.3z" />
          <path d="M53.3,10.6L10.7,53.3c-0.1-0.5-0.1-0.9-0.2-1.4L52,10.5C52.4,10.5,52.9,10.6,53.3,10.6z" />
          <path d="M55.9,11.1L11.1,55.9C11,55.5,11,55,10.9,54.6l43.7-43.7C55,10.9,55.5,11,55.9,11.1z" />
          <path d="M58.3,11.8L11.8,58.3c-0.1-0.4-0.2-0.8-0.4-1.2L57,11.4C57.5,11.5,57.9,11.6,58.3,11.8z" />
          <path d="M60.5,12.5l-48,48c-0.1-0.4-0.3-0.8-0.4-1.2l47.3-47.2C59.8,12.2,60.2,12.4,60.5,12.5z" />
          <path d="M62.7,13.4L13.4,62.7c-0.2-0.4-0.3-0.7-0.5-1.1l48.7-48.7C62,13.1,62.3,13.2,62.7,13.4z" />
          <path d="M64.7,14.4L14.4,64.7c-0.2-0.3-0.4-0.7-0.5-1l49.8-49.8C64,14,64.4,14.2,64.7,14.4z" />
          <path d="M66.7,15.5L15.5,66.7c-0.2-0.3-0.4-0.7-0.6-1l50.8-50.8C66,15.1,66.3,15.3,66.7,15.5z" />
          <path d="M68.5,16.7L16.7,68.5c-0.2-0.3-0.4-0.6-0.6-1L67.6,16C67.9,16.2,68.2,16.5,68.5,16.7z" />
          <path d="M70.3,17.9L18,70.3c-0.2-0.3-0.5-0.6-0.7-0.9l52.1-52.1C69.7,17.5,70,17.7,70.3,17.9z" />
          <path d="M71.9,19.3L19.3,71.9c-0.2-0.3-0.5-0.6-0.7-0.9l52.5-52.5C71.4,18.8,71.7,19.1,71.9,19.3z" />
          <path d="M73.5,20.8L20.8,73.5c-0.3-0.3-0.5-0.5-0.8-0.8L72.7,20C73,20.2,73.2,20.5,73.5,20.8z" />
          <path d="M75,22.3L22.3,75c-0.3-0.2-0.5-0.5-0.8-0.8l52.8-52.8C74.5,21.7,74.8,22,75,22.3z" />
          <path d="M76.4,23.9L23.9,76.4c-0.3-0.2-0.6-0.5-0.9-0.7l52.6-52.6C75.9,23.3,76.2,23.6,76.4,23.9z" />
          <path d="M77.7,25.6L25.6,77.7c-0.3-0.2-0.6-0.4-0.9-0.7l52.3-52.3C77.3,25,77.5,25.3,77.7,25.6z" />
          <path d="M79,27.4L27.4,79c-0.3-0.2-0.6-0.4-1-0.6l51.9-51.9C78.5,26.8,78.8,27.1,79,27.4z" />
          <path d="M80.1,29.3L29.3,80.1c-0.3-0.2-0.7-0.4-1-0.6l51.2-51.2C79.7,28.7,79.9,29,80.1,29.3z" />
          <path d="M81.1,31.3C81.1,31.3,81.1,31.3,81.1,31.3L31.3,81.1c0,0,0,0,0,0c-0.4-0.2-0.7-0.4-1-0.5l50.3-50.3    C80.8,30.6,81,31,81.1,31.3z" />
          <path d="M82.1,33.4L33.4,82.1c-0.4-0.2-0.8-0.3-1.1-0.5l49.3-49.3C81.8,32.7,81.9,33,82.1,33.4z" />
          <path d="M82.9,35.6L35.6,82.9c-0.4-0.1-0.8-0.3-1.2-0.4l48-48C82.6,34.8,82.8,35.2,82.9,35.6z" />
          <path d="M83.6,38L38,83.6c-0.4-0.1-0.8-0.2-1.2-0.4l46.5-46.5C83.3,37.1,83.5,37.5,83.6,38z" />
          <path d="M84.1,40.4L40.4,84.1c-0.4-0.1-0.9-0.2-1.3-0.3l44.8-44.8C84,39.5,84.1,40,84.1,40.4z" />
          <path d="M84.5,43L43,84.5c-0.5,0-0.9-0.1-1.4-0.2l42.7-42.7C84.4,42.1,84.5,42.6,84.5,43z" />
          <path d="M84.8,45.8L45.9,84.8c-0.5,0-1-0.1-1.5-0.1l40.3-40.3C84.7,44.8,84.8,45.3,84.8,45.8z" />
          <path d="M84.8,47.3v0.2c0,0.5,0,0.9,0,1.4L48.9,84.8c-0.5,0-0.9,0-1.4,0h-0.2L84.8,47.3z" />
          <path d="M84.7,50.4c0,0.6-0.1,1.2-0.2,1.8L52.2,84.5c-0.6,0.1-1.2,0.1-1.8,0.2L84.7,50.4z" />
          <path d="M84.3,53.9c-0.1,0.7-0.2,1.3-0.4,2l-28,28c-0.7,0.1-1.3,0.3-2,0.4L84.3,53.9z" />
          <path d="M83.4,57.8c-0.2,0.8-0.5,1.6-0.8,2.3L60.1,82.6h0c-0.8,0.3-1.5,0.5-2.3,0.8L83.4,57.8z" />
          <path d="M81.7,62.5c-0.5,1.1-1,2.1-1.6,3.2L65.7,80.1c-1,0.6-2.1,1.1-3.2,1.6L81.7,62.5z" />
        </svg>
      </Box>
    </Box>
  )
}
