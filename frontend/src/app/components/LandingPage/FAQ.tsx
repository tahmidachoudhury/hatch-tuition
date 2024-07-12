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

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
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
  const [expanded, setExpanded] = React.useState<string | false>("")

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <div style={{ marginTop: "62px" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Why 1.5-hour lessons?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In my three years of teaching, I&apos;ve found that this lesson
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
          <Typography sx={{ my: 1 }}>
            Payments are billed after the tuition month. So if you are
            interested in joining us in September, we will charge you on October
            the 1st the full amount for all lessons in that month. This is
            usually confirmed during the sign up. If you still are not sure
            about joining us, we offer a free-of-charge trial lesson for the
            student. If you are happy with how we run things here, then we can
            process the monthly payment. If not, then no strings attached!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Can I pay pay-as-you-go or is it monthly?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ my: 1 }}>
            We currently do not offer pay-as-you-go as a payment option. This is
            just to ensure that our tutors are fully paid for the lessons that
            they teach - and prepare for.
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
          <Typography sx={{ my: 1 }}>
            If for any reason your child can not attend their lesson, we must be
            notified a minimum of three days prior to the lesson. This way, we
            can promptly reschedule your child&apos;s lesson as a catch-up into
            another class of ours, either during the weekday or next weekend.
          </Typography>
          <Typography sx={{ my: 1 }}>
            If your child misses a lesson without informing us, we are not
            obliged to refund you the amount. However, we understand that life
            is full of surprises sometimes, so if there are any serious last
            minute emergencies, please contact us directly and we can deduct the
            missed lesson amounts from your bill next month.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Why are separate science lessons £9 each?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ my: 1 }}>
            If you are interested in science tuition - we know that it can be
            rather expensive. So for GCSE Science students only, we offer two
            great choices.
          </Typography>
          <Typography sx={{ my: 1 }}>
            You can choose the General Science package, where students can do
            one or more lessons per week on any of the three science subjects of
            their choice.
          </Typography>
          <Typography sx={{ my: 1 }}>
            Or you can choose the Separate Science course, where students learn
            Chemistry, Biology and Physics separately throughout the week. You
            can also choose just two, or even one science subject - which is why
            it is one of our most popular services. This option is targeted to
            lower-achieving students who are looking to boost their grade
            quickly and effectively.
          </Typography>
          <Typography sx={{ my: 1 }}>
            General Science lessons are charged at the normal lesson price and
            are tailored to fit families who don&apos;t have much availability
            throughout the week. They are perfect for high-achieving students
            who need to spend more time reviewing and revising content.
          </Typography>
          <Typography sx={{ my: 1 }}>
            To clarify, KS3 students are only taught with the General Science
            service.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
