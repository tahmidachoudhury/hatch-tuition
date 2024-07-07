import Head from "next/head"
import Calendly from "./components/LandingPage/Calendly"
import ContactForm from "./components/LandingPage/ContactForm"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tuition Company</title>
        <meta name="description" content="Tuition services" />
      </Head>
      <main>
        <h1>Welcome to Our Tuition Services</h1>
        <Calendly />
        <ContactForm />
      </main>
    </div>
  )
}
