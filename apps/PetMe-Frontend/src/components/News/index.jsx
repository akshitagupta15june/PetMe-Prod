/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { newsForPage } from "../../helpers/newsForPage"

import moment from "moment"
import NewInCarousel from "./carousel/TitleCarousel"

export default function NewsTemplate() {
  return (
    <div class="container px-5 mx-auto max-w-7x1">
      <NewInCarousel />
      <div class="flex flex-wrap mt-5 ">
        {newsForPage.map((news) => (
          <div key={news.id} class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-white p-2 rounded-lg shadow-xl border border-blue-800">
              <img
                class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                src={news.image}
              />
              <h3 class="tracking-widest text-amber-700 text-xs font-bold title-font">
                {" "}
                {moment(news?.date).format("Do MMM, YYYY")}{" "}
              </h3>
              <h2 class="text-lg text-gray-900 font-semibold title-font mb-4">
                {" "}
                {news.title}{" "}
              </h2>
              <p class="leading-relaxed text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
