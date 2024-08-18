import { Box, Typography } from "@mui/material"
import { CiCalendar } from "react-icons/ci"
import { TfiStatsUp } from "react-icons/tfi"
import { BsBarChartFill, BsBoxArrowInDownLeft } from "react-icons/bs"
import { CiCompass1 } from "react-icons/ci"

import data from "../../data/HowWeGetResults"

const iconMap = {
  CiCalendar: CiCalendar,
  TfiStatsUp: TfiStatsUp,
  BsBarChartFill: BsBarChartFill,
  CiCompass1: CiCompass1,
}

export default function PlanToResults() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        className="wave"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "200%", md: "100%" },
          overflow: "hidden",
          lineHeight: 0,
          transform: "rotate(180deg)",
        }}
      >
        <svg
          style={{
            position: "relative",
            display: "block",
            width: "calc(100% + 1.3px)",
            height: "158px",
          }}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </Box>
      <Box pt="13rem" display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h1">How We Get Results</Typography>
        <Box
          py="6rem"
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          }}
          sx={{ width: { xs: "90%", md: "60%" } }}
        >
          {data.map((item) => {
            const IconComponent = iconMap[item.icon]
            return (
              <Box key={item.id} py={2} width="auto">
                <Box
                  sx={{
                    borderLeft: "1px solid black",
                    height: "44px",
                    pl: "20px",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      borderRadius: "5px",
                      border: "1px solid black",
                      textAlign: "center",
                      height: "48px",
                      width: "48px",
                    }}
                  >
                    <IconComponent size={39} />
                  </Box>
                </Box>
                <Box pl="20px">
                  <Typography variant="h4" py="1rem">
                    {item.subject}{" "}
                  </Typography>
                  <Typography>{item.content}</Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
