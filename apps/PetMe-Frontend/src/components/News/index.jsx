/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"
import { newsForPage } from "../../helpers/newsForPage"

import moment from "moment"
export default function NewsTemplate() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredNewsPosts = newsForPage.filter((post) => {
    const { title, description } = post
    const searchText = `${title} ${description}}`.toLowerCase()
    return searchText.includes(searchQuery.toLowerCase())
  })

  return (
    <div class="container px-5 mx-auto max-w-7x1">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search news posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          onClick={filteredNewsPosts}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      <div class="flex flex-wrap -m-4">
        {searchQuery.length > 0 ? (
          filteredNewsPosts.length > 0 ? (
            filteredNewsPosts.map((news) => (
              <div key={news.id} class="xl:w-1/3 md:w-1/2 p-4">
                <div class="bg-white p-6 rounded-lg">
                  <img
                    class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                    src={news.image}
                  />
                  <h3 class="tracking-widest text-amber-700 text-xs font-bold title-font">
                    {" "}
                    {moment(news?.date).format("Do MMM, YYYY")}{" "}
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    {" "}
                    {news.title}{" "}
                  </h2>
                  <p class="leading-relaxed text-sm">{news.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full flex my-10 items-center justify-center text-3xl text-[red]">
              No News Post Found with these keywords.
            </div>
          )
        ) : (
          newsForPage.map((news) => (
            <div key={news.id} class="xl:w-1/3 md:w-1/2 p-4">
              <div class="bg-white p-6 rounded-lg">
                <img
                  class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                  src={news.image}
                />
                <h3 class="tracking-widest text-amber-700 text-xs font-bold title-font">
                  {" "}
                  {moment(news?.date).format("Do MMM, YYYY")}{" "}
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  {" "}
                  {news.title}{" "}
                </h2>
                <p class="leading-relaxed text-sm">{news.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
