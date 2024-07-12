import Head from "next/head"
import Calendly from "./Calendly"
import ContactForm from "./ContactForm"
import AppBar from "./Appbar"
import CustomizedAccordions from "./FAQ"
import { Box } from "@mui/material"

export default function Home() {
  return (
    <Box sx={{ px: 4 }}>
      <CustomizedAccordions />
      <Calendly />
      <ContactForm />
    </Box>
  )
}
