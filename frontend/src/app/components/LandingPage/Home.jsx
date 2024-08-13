"use client"

import Calendly from "./Calendly"
import ContactForm from "./ContactForm"
import CustomizedAccordions from "./FAQ"
import { Box } from "@mui/material"
import ReviewSection from "./Reviews"
import Hero from "./Hero"
import { Montserrat } from "next/font/google"
import ExamBoards from "./ExamBoards"
import Footer from "./Footer"
import SimpleSlider from "./Slider"
import AccordionSection from "./AccordionSection"
import Online from "./Online"
import CustomizedTables from "./CustomizedTables"
import CentreTabs from "./PMCtabs"
import PlanToResults from "./PlanToResults"

export default function Home() {
  return (
    <Box>
      <Hero />
      <ExamBoards />
      <CentreTabs />
      {/* <SimpleSlider /> */}
      {/* <ReviewSection /> */}
      {/* <Online /> */}
      {/* <AccordionSection /> */}
      <CustomizedTables />
      <PlanToResults />
      <Calendly />
      <CustomizedAccordions />
      {/* <ContactForm /> */}
      <Footer />
    </Box>
  )
}
