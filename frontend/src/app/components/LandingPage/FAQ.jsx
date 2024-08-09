"use client"

import * as React from "react"
import { styled } from "@mui/material/styles"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/material"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Box sx={{ pb: "10px", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: { xs: "90%", md: "60%" }, m: "auto" }}>
        <Typography variant="h1" sx={{ pb: 6, pt: 4, textAlign: "center" }}>
          Frequently Asked
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Why 2-hour lessons?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In our three years of teaching, We have found that this lesson
              duration works best. They give us the time to balance learning
              theory and putting it into practice. You see, one hour just
              isn&apos;t enough for students to understand and apply what
              they&apos;ve learned. With every lesson, we make sure to practice
              exam questions to ensure that what they have learnt can be applied
              correctly. It allows them to make mistakes in a safe space, and
              learn from them before exams. It&apos;s all about making sure the
              learning sticks and preparing them for success, both in class and
              beyond.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>When are payments for my classes due?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ my: 1 }} gutterBottom>
              Payments are billed after the tuition month. So if you are
              interested in joining us in September, we will charge you on
              October the 1st the full amount for all lessons in that month.
              This is usually confirmed during the sign up. If you still are not
              sure about joining us, we offer a free-of-charge trial lesson for
              the student. If you are happy with how we run things here, then we
              can process the monthly payment. If not, then no strings attached!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Do I have to commit to anything longterm?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ my: 1 }} gutterBottom>
              Nope!
            </Typography>
            <Typography sx={{ my: 1 }} gutterBottom>
              All of our contracts are on a month-to-month basis, we don't
              believe in long term tie downs. Parents stay with us because we
              deliver stellar results, not because they signed a piece of
              contract saying they have to.
            </Typography>
            <Typography sx={{ my: 1 }} gutterBottom>
              However we do recommend our clients that they commit to the
              process for 90 days to allow their child to maximise their
              progress.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>
              What if my child misses a lesson, or cannot attend their lesson?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ my: 1 }} gutterBottom>
              If for any reason your child can not attend their lesson, we must
              be notified a minimum of three days prior to the lesson. This way,
              we can promptly reschedule your child&apos;s lesson as a catch-up
              into another class of ours, either during the weekday or next
              weekend.
            </Typography>
            <Typography sx={{ my: 1 }} gutterBottom>
              If your child misses a lesson without informing us, we are not
              obliged to refund you the amount. However, we understand that last
              minute emergencies happen, so please contact us directly and we
              can deduct the missed lesson amounts from your bill next month.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
