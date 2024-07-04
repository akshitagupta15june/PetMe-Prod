import React from "react"
import { motion } from "framer-motion"
import animals from "../../helpers/animalsForCards"
import TitleSection from "../TitleSection"
import location from "../../assets/images/location.png"

function AnimalsCard() {
  return (
    <>
      <div className="bg-[#008170]">
        <h1 className="text-5xl font-extrabold text-center text-white my-10 py-3">
          Meet our Friends
        </h1>
        <motion.div
          className="grid grid-cols-1 mx-auto gap-10 mt-14 lg:grid-cols-3 mb-10 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {animals.map((animal) => (
            <section className="flex flex-col" key={animal.name}>
              <motion.button
                type="button"
                className="button"
                // whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              >
                {/* <img
                src={animal.image}
                alt={animal.name}
                className="rounded-md w-[20rem] h-[20rem]"
              /> */}
                <div className="bg-[#FAF0E6] p-3 m-3 rounded-md">
                  <div className="relative flex justify-center items-center">
                    <div className="bg-[#EE8572] rounded-full w-[20rem] h-[20rem] flex justify-center items-center">
                      <img
                        src={animal.image}
                        alt={animal.name}
                        className="rounded-md w-[20rem] h-[20rem] transform -translate-y-4"
                      />
                    </div>
                  </div>
                  <h1 className="self-center text-3xl font-bold">
                    {animal.name}
                  </h1>
                  <div className="flex items-center mt-2 justify-center">
                    <img src={location} className="w-4 h-4" alt="" />
                    <h6 className="ml-2">{animal.location}</h6>
                  </div>

                  <div className="grid grid-cols-2 gap-2 p-2 place-items-center">
                    <h4 className="text-sm">
                      <span className="font-semibold"> Age :</span> {animal.age}
                    </h4>
                    <h4 className="text-sm">
                      <span className="font-semibold"> Color :</span>{" "}
                      {animal.color}
                    </h4>
                    {/* <h4>{animal.type}</h4> */}
                    <h4 className="text-sm">
                      <span className="font-semibold"> Race :</span>{" "}
                      {animal.race}
                    </h4>
                    <h4 className="text-sm">
                      <span className="font-semibold"> Gender : </span>
                      {animal.gender}
                    </h4>

                    <button
                      type="button"
                      className="bg-blue-950 text-white w-52 p-4 focus:outline-none font-bold rounded md:mt-2 col-span-2"
                    >
                      <a href="/adopt">Adopt</a>
                    </button>
                  </div>
                </div>
              </motion.button>
            </section>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AnimalsCard
