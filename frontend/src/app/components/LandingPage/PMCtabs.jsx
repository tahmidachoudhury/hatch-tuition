import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { List, styled, Typography } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { CiCalendar } from "react-icons/ci"
import { PiChartLineUp } from "react-icons/pi"
import { MdOutlineForum } from "react-icons/md"
import data from "../../data/PMCData.json"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ m: 0, py: 6 }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 80,
    width: "100%",
    backgroundColor: "#ffffff",
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",

    marginRight: theme.spacing(1),
    color: "rgba(160, 160, 160, 0.7)",
    "&.Mui-selected": {
      color: "#000000",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
)

export default function CentreTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      py={8}
      gap={2}
      alignItems="center"
      backgroundColor="#a5d4e4"
    >
      <Typography variant="h1" color="#4a5c64">
        The PMC Formula
      </Typography>
      <Box sx={{ width: "fit-content" }}>
        <Box display="flex" justifyContent="center">
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <StyledTab
              icon={<CiCalendar size={28} />}
              iconPosition="start"
              label="Plan"
              {...a11yProps(0)}
            />
            <StyledTab
              icon={<PiChartLineUp size={28} />}
              iconPosition="start"
              label="Monitor"
              {...a11yProps(1)}
            />
            <StyledTab
              icon={<MdOutlineForum size={28} />}
              iconPosition="start"
              label="Communicate"
              {...a11yProps(2)}
            />
          </StyledTabs>
        </Box>

        <Box sx={{ width: "350px", m: "auto" }}>
          {data.map((item) => (
            <CustomTabPanel value={value} index={item.id} key={item.id}>
              <Typography variant="h2" color="#4a5c64" gutterBottom>
                {item.title}
              </Typography>
              <Typography color="#4a5c64" gutterBottom>
                {item.subject}
              </Typography>
              <List sx={{ py: "1rem" }}>
                {item.list.map((listItem) => (
                  <Box display="flex" py="8px" key={listItem}>
                    <Box sx={{ mx: "8px" }}>
                      <CheckCircleIcon />
                    </Box>
                    <Typography color="#4a5c64">{listItem}</Typography>
                  </Box>
                ))}
              </List>
              <Typography color="#4a5c64" gutterBottom>
                {item.closing}
              </Typography>
            </CustomTabPanel>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
