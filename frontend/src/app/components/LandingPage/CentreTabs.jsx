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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    <Box display="flex" justifyContent="center">
      <Box sx={{ width: "fit-content" }}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Plan" {...a11yProps(0)} />
            <Tab label="Monitor" {...a11yProps(1)} />
            <Tab label="Communication" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Box>
          <CustomTabPanel value={value} index={0}>
            <Typography variant="h2" gutterBottom>
              Plan
            </Typography>
            <Typography gutterBottom>
              Assessing your child's strengths and weaknesses, following up with
              challenging and attainable goals.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Strength & Weakness Consultation" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Topic Targeted Assessments" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Curriculum Checklist" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Exam-board Specific" />
              </ListItem>
            </List>
            <Typography gutterBottom>
              We set goals towards clearing a curriculum checklist, ensuring the
              relevant topics are covered and assessed.
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
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="in-class performance" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="homework reviews" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="easy to read weekly reports" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="improved attitude towards studying" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Driven progress" />
              </ListItem>
            </List>
            <Typography gutterBottom>
              We send you assessment results and weekly reports, tracking your
              child's progress.
            </Typography>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Typography variant="h2" gutterBottom>
              Communication
            </Typography>
            <Typography gutterBottom>
              We offer monthly meetings to discuss your child's overall
              progress.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Goal Adjustment" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Monthly Recap" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Progress Review" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="A plan for the next month" />
              </ListItem>
            </List>
            <Typography gutterBottom>
              Ensuring we are all aligned in supporting your child's educational
              journey.
            </Typography>
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  )
}
