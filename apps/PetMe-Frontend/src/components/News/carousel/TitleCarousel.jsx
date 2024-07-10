import React from "react"

const TitleCarousel = () => {
  const items = [
    "Global Pet News",
    "Global Pet News",
    "Global Pet News",
    "Global Pet News",
    "Global Pet News",
  ]
  return (
    <div className="relative overflow-hidden whitespace-nowrap p-1 bg-gray-800">
      <div className="flex items-center animate-marquee space-x-4">
        {items.concat(items).map((item, index) => (
          <span key={index} className="text-xl font-bold text-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TitleCarousel
