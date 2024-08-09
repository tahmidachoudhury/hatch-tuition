"use-client"

import * as React from "react"
import { styled } from "@mui/material/styles"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import AddIcon from "@mui/icons-material/Add"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/material"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  backgroundColor: "inherit",
  "&::before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: "1.3rem", color: "black" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}))

export default function AccordionSection() {
  const [expanded, setExpanded] = React.useState("panel1")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Box
      sx={{
        px: "10%",
        mx: "auto",
        py: 13,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        backgroundColor: "#a5d4e4",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "40%" } }}>
        <Typography variant="h1" pb={10}>
          Why choose Hatch?
        </Typography>
        <img
          src="/images/aaron-burden-LNwn_A9RGHo-unsplash.jpg"
          className="responsive-image"
          alt="paper on desk"
          style={{
            objectFit: "contain",
            display: "block",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Box sx={{ width: { xs: "100%", md: "50%" }, pt: "2rem" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h2">
              Personalized Learning Experience
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h3" p={2}>
              Our tuition services are designed to cater to each student&apos;s
              unique learning needs and styles. We assess individual strengths
              and areas for improvement, crafting tailored lesson plans that
              ensure effective and engaging learning.This personalized attention
              ensures that students not only achieve academic success but also
              develop a genuine interest in the subject matter.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography variant="h2">Flexibility and Convenience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h3" p={2}>
              We understand the importance of balancing education with other
              commitments. That&apos;s why our tuition services offer both
              online and in-person sessions. Online lessons provide the
              convenience of learning from home or any preferred location, while
              in-person sessions offer a more traditional, hands-on approach.
              Our adaptable scheduling ensures that learning can fit seamlessly
              into your student&apos;s busy life, making it easier to stay
              consistent and motivated.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography variant="h2">
              Expert Tutors with Proven Success
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h3" p={2}>
              Our team of experienced tutors are fully DBS checked and are
              passionate about teaching, committed to student success. With
              expertise in their respective fields, they bring a wealth of
              knowledge and practical insights to each session. Our tutors use
              proven teaching methods and resources to help students excel in
              their studies.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
