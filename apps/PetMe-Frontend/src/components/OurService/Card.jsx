import React from "react"
export default function Card(props) {
  return (
    <section className="w-full sm:w-[65%] bg-white h-fit p-6 rounded-xl space-y-4  border-2 border-white hover:border-amber-600 hover:cursor-pointer">
      {/*title*/}
      <div className="text-xl font-bold"> {props.title} </div>
      {/*content*/}
      <div className="leading-normal text-gray-500 text-sm text-justify">
        {props.content}
      </div>
    </section>
  )
}
