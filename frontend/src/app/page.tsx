import Head from "next/head"
import Home from "./components/LandingPage/Home"
import AppBar from "./components/LandingPage/Appbar"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
})

export default function Page() {
  return (
    <div>
      <Head>
        <title>Tuition Company</title>
        <meta name="description" content="Tuition services" />
      </Head>
      <main className={montserrat.className}>
        <AppBar />
        <Home />
      </main>
    </div>
  )
}
