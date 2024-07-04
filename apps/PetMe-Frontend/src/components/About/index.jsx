import { motion } from "framer-motion"
import React, { useContext } from "react"
import HeaderContext from "../../context/HeaderContext"
import cat from "../../assets/animalsImages/cat.png"

function Index() {
  const { aboutSection } = useContext(HeaderContext)

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
    <motion.div
      className="bg-purple-900"
      initial={{ opacity: 0 }}
      whileInView={whileInView}
      animate={animateDiv}
      viewport={{ once: true }}
    >
      <section className="max-w-screen-xl min-h-screen mx-auto p-10 flex flex-col md:flex-row items-center">
        <img
          src={cat}
          alt=""
          className="w-1/2 sm:w-1/3 md:w-auto  md:block hidden md:max-w-sm mb-6 lg:mb-0"
        />

        <div className="flex flex-col lg:ml-6">
          <h1
            ref={aboutSection}
            className="text-white text-center font-extrabold text-2xl sm:text-3xl lg:text-5xl py-4"
          >
            What makes us different?
          </h1>
          <div className="flex flex-col lg:flex-row text-center justify-center mt-4 items-center">
            <p className="bg-yellow-300 p-2 rounded-2xl mb-2 lg:mb-0 lg:mr-2">
              375 pets rescued
            </p>
            <p className="bg-yellow-300 p-2 rounded-2xl mb-2 lg:mb-0 lg:mr-2">
              765 pets adopted
            </p>
            <p className="bg-yellow-300 p-2 rounded-2xl">550 reviews</p>
          </div>
          <p className="text-gray-200 mt-10 text-left pb-4 text-sm sm:text-base lg:text-lg">
            Our mission is to provide a platform that connects animal lovers
            with pets in need of a forever home, while also providing emergency
            medical care for stray animals in distress.
            <span className="block mt-2">
              We strive to make a difference in the lives of these innocent
              creatures by offering options to Adopt, Donate and through our SOS
              feature Report stray animals in need of immediate assistance.
            </span>
            <span className="block mt-2 font-bold">
              Together, we can create a better world for all animals.
            </span>
          </p>
        </div>
      </section>
    </motion.div>
  )
}

export default Index
