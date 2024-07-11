import Head from "next/head"
import Calendly from "./components/LandingPage/Calendly"
import ContactForm from "./components/LandingPage/ContactForm"
import AppBar from "./components/LandingPage/Appbar"
import CustomizedAccordions from "./components/LandingPage/FAQ"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tuition Company</title>
        <meta name="description" content="Tuition services" />
      </Head>
      <main>
        <AppBar />
        <CustomizedAccordions />
        <Calendly />
        <ContactForm />
      </main>
    </div>
  )
}
