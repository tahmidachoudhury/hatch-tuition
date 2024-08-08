import { Box, Button, Typography } from "@mui/material"

export default function Online() {
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            odjwadksihoawbryw nabdfehwfp
          </Typography>
          <Typography variant="h4" gutterBottom>
            pikdcascak
          </Typography>
          <Button sx={{ pt: 6 }}>Learn more</Button>
        </Box>
      </Box>
      <Box sx={{ width: "50vw" }}>
        <img
          src="/images/aaron-burden-LNwn_A9RGHo-unsplash.jpg"
          style={{
            objectFit: "contain",
            display: "block",
            maxHeight: "100%",
            width: "auto",
          }}
        />
      </Box>
    </Box>
  )
}
