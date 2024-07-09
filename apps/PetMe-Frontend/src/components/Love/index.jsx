import React from "react"
import animal from "../../assets/images/service-cat-dog.png"

export default function Love() {
  return (
    <div className="w-full pt-10 p-4 bg-yellow-300 flex flex-wrap">
      <div className="w-full  text-2xl sm:text-3xl lg:text-5xl text-yellow-950 text-center font-extrabold">
        Help Us, Help Them
        <p className="text-yellow-800 text-base  pt-5 text-center ">
          Join us in our mission to provide care, comfort, and companionship to
          pets in need.
        </p>
      </div>

      <div className="w-full md:w-1/2 md:block hidden">
        <img src={animal} alt="Cat and Dog" />
      </div>

      <div className="w-full pt-5 sm:w-1/2 mx-auto">
        <div className="bg-yellow-100 w-3/5 text-center rounded-md p-5 mb-5 mx-auto">
          <h2>
            Your generosity can make a real difference in the lives of animals
            in need.
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 p-3 mt-3 rounded-full text-white font-bold text-base">
            Support Our Cause
          </button>
        </div>
        <div className="bg-yellow-100 w-3/5 text-center rounded-md p-5 mb-5 mx-auto">
          <h2>
            From playful kittens to loyal dogs, there's a perfect match waiting
            for you.
          </h2>
          <button className="bg-orange-500  hover:bg-orange-600 p-3 mt-3 rounded-full text-white font-bold text-base">
            Find Your Best Friend
          </button>
        </div>
      </div>
    </div>
  )
}
