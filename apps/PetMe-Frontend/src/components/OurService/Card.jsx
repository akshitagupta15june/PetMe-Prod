import React from "react"

export default function Card(props) {
  return (
    <section className="w-full sm:w-[60%] text-center bg-pink-800 p-4 rounded-xl text-white hover:cursor-pointer flex flex-col justify-between">
      {/* Title */}
      <div className="text-lg font-bold">{props.title}</div>
      {/* Content */}
      <div className="flex-1 leading-normal text-pink-100 text-sm text-justify">
        {props.content}
      </div>
    </section>
  )
}
