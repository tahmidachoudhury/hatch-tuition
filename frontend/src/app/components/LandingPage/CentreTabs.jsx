import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { CiCalendar } from "react-icons/ci"
import { PiChartLineUp } from "react-icons/pi"
import { MdOutlineForum } from "react-icons/md"

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
      {value === index && <Box sx={{ m: 0, py: 5 }}>{children}</Box>}
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
    >
      <Typography variant="h1">The PMC Formula</Typography>
      <Box sx={{ width: "fit-content" }}>
        <Box display="flex" justifyContent="center">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              icon={<CiCalendar size={28} />}
              iconPosition="start"
              label="Plan"
              {...a11yProps(0)}
            />
            <Tab
              icon={<PiChartLineUp size={28} />}
              iconPosition="start"
              label="Monitor"
              {...a11yProps(1)}
            />
            <Tab
              icon={<MdOutlineForum size={28} />}
              iconPosition="start"
              label="Communicate"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>

        <Box sx={{ width: "410px" }}>
          <CustomTabPanel value={value} index={0}>
            <Typography variant="h2" gutterBottom>
              Plan
            </Typography>
            <Typography gutterBottom>
              We start by assessing your child&apos;s strengths and weaknesses.
              This way we can make an estimate of their current working grade.
            </Typography>
            <List sx={{ py: "1rem" }}>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Subject-focused Consultation</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Topic Targeted Assessments</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Curriculum Checklist</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Exam-board Specific</Typography>
              </Box>
            </List>
            <Typography gutterBottom>
              All that is left is to begin clearing a curriculum checklist,
              ensuring the relevant topics are covered and assessed.
            </Typography>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <Typography variant="h2" gutterBottom>
              Monitor
            </Typography>
            <Typography gutterBottom>
              Monitoring through assessments each month accompanied by brief
              weekly reports.
            </Typography>
            <List sx={{ py: "1rem" }}>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>In-class Performance</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Homework Reviews</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Easy to Read Weekly Reports</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Improved Attitude Towards Studying</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Driven progress</Typography>
              </Box>
            </List>
            <Typography gutterBottom>
              We will send you assessment results and weekly reports, tracking
              your child&apos;s progress.
            </Typography>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <Typography variant="h2" gutterBottom>
              Communication
            </Typography>
            <Typography gutterBottom>
              We offer monthly meetings to discuss your child&apos;s overall
              progress.
            </Typography>
            <List sx={{ py: "1rem" }}>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Goal Adjustment</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Monthly Recap</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>Progress Review</Typography>
              </Box>
              <Box display="flex" py="4px">
                <Box sx={{ mx: "8px" }}>
                  <CheckCircleIcon />
                </Box>
                <Typography>A plan for the next month</Typography>
              </Box>
            </List>
            <Typography gutterBottom>
              Ensuring we are all aligned in supporting your child&apos;s
              educational journey.
            </Typography>
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  )
}
