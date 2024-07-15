import React from "react"
import animal from "../../assets/animalsImages/animal-sleeping.jpg"

function Error() {
  return (
    <div className=" mx-auto justify-center items-center">
      <img src={animal} alt="" />
      <h1 className="text-center text-lg md:text-4xl font-black text-gray-500 sm:text-xl">
        Coming Soon !!!
      </h1>
    </div>
  )
}

export default Error
