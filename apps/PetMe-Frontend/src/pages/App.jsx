import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import OurService from "../components/OurService"
import Love from "../components/Love"
import AnimalsCard from "../components/AnimalsCard"
import Contributors from "../components/Contributors"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

function App() {
  return (
    <>
      <Header />
      <main className="flex pt-[6rem] flex-col w-full">
        <Hero />
        <About />
        <AnimalsCard />

        <OurService />
        <Love />

        {/* <Contributors /> */}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
