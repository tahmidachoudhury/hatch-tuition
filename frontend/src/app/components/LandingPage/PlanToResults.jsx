import { Box, Typography } from "@mui/material"
import { CiCalendar } from "react-icons/ci"
import { TfiStatsUp } from "react-icons/tfi"
import { BsBarChartFill } from "react-icons/bs"
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
    <Box py="2rem" display="flex" flexDirection="column" alignItems="center">
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
  )
}
