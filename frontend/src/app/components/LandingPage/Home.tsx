import Head from "next/head"
import Calendly from "./Calendly"
import ContactForm from "./ContactForm"
import AppBar from "./Appbar"
import CustomizedAccordions from "./FAQ"
import { Box } from "@mui/material"
import ReviewSection from "./Reviews"

export default function Home() {
  return (
    <Box sx={{ px: 4 }}>
      <ReviewSection />
      <CustomizedAccordions />
      <Calendly />
      <ContactForm />
    </Box>
  )
}
