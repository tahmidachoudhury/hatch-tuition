"use client"

import Head from "next/head"
import Home from "./components/LandingPage/Home"
import AppBar from "./components/LandingPage/Appbar"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../styles/theme"

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
        <ThemeProvider theme={theme}>
          <AppBar />
          <Home />
        </ThemeProvider>
      </main>
    </div>
  )
}
