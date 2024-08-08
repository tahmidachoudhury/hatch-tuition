import { Box, Typography } from "@mui/material"

export default function subjects() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(5, minmax(0, 1fr))"
      gap={6}
      sx={{
        p: 3,
        position: "absolute",
        bottom: 30,
        width: "fit-content",
        backgroundColor: "#d1e9f1",
        border: "8px solid #d1e9f1",
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
          style={{ width: "30px", height: "30px" }}
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
          src="//c.superprof.com/img/ico/mat/10.svg"
          style={{ width: "30px", height: "30px" }}
        />
        <Typography>Biology</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="end"
      >
        <img
          src="//c.superprof.com/img/ico/mat/15.svg"
          style={{ width: "30px" }}
        />
        <Typography>Chemistry</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="end"
      >
        <img
          src="//c.superprof.com/img/ico/mat/14.svg"
          style={{ width: "30px" }}
        />
        <Typography>Physics</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="end"
      >
        <img
          src="//c.superprof.com/img/ico/mat/260.svg"
          style={{ width: "30px" }}
        />
        <Typography>English</Typography>
      </Box>
    </Box>
  )
}
