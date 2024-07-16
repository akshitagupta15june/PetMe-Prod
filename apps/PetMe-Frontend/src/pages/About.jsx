import { motion } from "framer-motion"
import React, { useContext } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeaderContext from "../context/HeaderContext"
import animal from "../assets/animalsImages/about-cat.png"

function About() {
  const { aboutSection } = useContext(HeaderContext)

  const font = () => ({
    fontFamily: '"Archivo Black", sans-serif',
  })

  const whileInView = {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 1,
    },
  }

  const animateDiv = {
    x: 100,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  }
  return (
    <>
      <Header />

      <motion.div
        className="bg-purple-700"
        initial={{ opacity: 0 }}
        whileInView={whileInView}
        animate={animateDiv}
        viewport={{ once: true }}
      >
        <section className=" mx-auto pl-5 pt-5 pr-5 pb-0  flex flex-col md:flex-row items-center">
          <div className="flex flex-col lg:ml-6">
            <h1
              ref={aboutSection}
              className="text-white text-center font-extrabold text-2xl sm:text-3xl lg:text-5xl py-4 "
            >
              About Us
            </h1>
            {/* <div className="flex flex-col lg:flex-row text-center justify-center mt-4 items-center">
              <p className="bg-yellow-300 p-2 rounded-2xl mb-2 lg:mb-0 lg:mr-2">
                375 pets rescued
              </p>
              <p className="bg-yellow-300 p-2 rounded-2xl mb-2 lg:mb-0 lg:mr-2">
                765 pets adopted
              </p>
              <p className="bg-yellow-300 p-2 rounded-2xl">550 reviews</p>
            </div> */}
            <p className="text-gray-200 mt-10 pb-4  text-sm sm:text-base lg:text-lg  text-center">
              Our mission is to provide a platform that connects animal lovers
              with pets in need of a forever home, while also providing
              emergency medical care for stray animals in distress.
              <span className="block mt-2">
                We strive to make a difference in the lives of these innocent
                creatures by offering options to Adopt, Donate and through our
                SOS feature Report stray animals in need of immediate
                assistance.
              </span>
              {/* <span className="block mt-2 font-bold">
                Together, we can create a better world for all animals.
              </span> */}
              <span className="block mt-2 text-lg md:text-2xl  text-pink-200 font-black">
                Together, we can create a better world for all animals.
              </span>
            </p>
          </div>
        </section>

        <div className="relative flex">
          <img
            src={animal}
            alt=""
            className="sm:w-1/3 md:w-auto sm:block hidden md:max-w-sm mb-6 lg:mb-0"
          />
          <p className="absolute top-8 left-60 mt-2 mr-2 sm:block hidden bg-pink-300 rounded-xl px-2 py-1 font-semibold text-xs">
            That sounds meowonderful !
          </p>
        </div>
      </motion.div>

      <Footer />
    </>
  )
}

export default About
