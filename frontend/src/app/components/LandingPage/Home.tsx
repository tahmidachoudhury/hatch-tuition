import Calendly from "./Calendly"
import ContactForm from "./ContactForm"
import CustomizedAccordions from "./FAQ"
import { Box } from "@mui/material"
import ReviewSection from "./Reviews"
import Hero from "./Hero"
import { Montserrat } from "next/font/google"
import ExamBoards from "./ExamBoards"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
})

export default function Home() {
  return (
    <Box className={montserrat.className}>
      <Hero />
      <ExamBoards />
      <ReviewSection />
      <CustomizedAccordions />
      <Calendly />
      <ContactForm />
    </Box>
  )
}
