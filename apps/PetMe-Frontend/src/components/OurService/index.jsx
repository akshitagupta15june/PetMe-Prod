import React from "react"
import ourServiceCover from "../../assets/animalsImages/cat-up.png"
import Card from "./Card.jsx"

export default function OurService() {
  return (
    <section className="w-full  bg-pink-100">
      <div className="w-full mx-auto">
        {/* Title */}
        <div className=" text-2xl sm:text-3xl lg:text-5xl font-extrabold text-center text-gray-800 my-10 py-3">
          What We Offer:
        </div>

        {/* Cards and Image Layout */}
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {/* First Row of Cards */}
          <div className="w-full flex justify-center gap-4">
            <Card title="Adoption Counseling" />
            <Card title="Matchmaking" />
            <Card title="Health and Wellness" />
          </div>

          {/* Second Row of Cards */}
          <div className="w-full flex justify-center gap-4">
            <Card title="Behavioral Support" />
            <Card title="Post-Adoption Follow-Up" />
            <Card title="Community Events and Resources" />
          </div>
        </div>

        {/* Image */}
        <div className="w-full flex justify-end mt-6">
          <div className="w-full max-w-[20rem] overflow-hidden">
            <p className=" text-sm text-pink-800 font-semibold">
              Adopt Me Hooman! Your home needs an owner
            </p>
            <img
              src={ourServiceCover}
              className="w-full h-auto object-cover"
              alt="Cat Image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
