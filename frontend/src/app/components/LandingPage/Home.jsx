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

export default function Home() {
  return (
    <Box>
      <Hero />
      <ExamBoards />
      {/* <SimpleSlider /> */}
      <ReviewSection />
      <AccordionSection />
      <CustomizedAccordions />
      <Calendly />
      <ContactForm />
      <Footer />
    </Box>
  )
}
