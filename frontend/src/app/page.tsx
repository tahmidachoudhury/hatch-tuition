import Head from "next/head"
import Home from "./components/LandingPage/Home"
import AppBar from "./components/LandingPage/Appbar"

export default function Page() {
  return (
    <div>
      <Head>
        <title>Tuition Company</title>
        <meta name="description" content="Tuition services" />
      </Head>
      <main>
        <AppBar />
        <Home />
      </main>
    </div>
  )
}
