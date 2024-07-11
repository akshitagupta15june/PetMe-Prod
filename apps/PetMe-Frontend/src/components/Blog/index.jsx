import React from "react"
import { posts } from "../../helpers/postsForBlog"
import HeroPhoto from "../../assets/blogImages/blog-top.png"

export function BlogTemplate() {
  const font = () => ({
    fontFamily: '"Archivo Black", sans-serif',
  })

  return (
    <>
      <div className="bg-[#187666] ">
        <div className="flex flex-col h-[150px] items-center justify-start w-full md:mb-0 md:h-[300px]  xl:h-[400px]">
          <img
            src={HeroPhoto}
            alt="Shows 2 cats and 2 dogs looking direct to the user, with their paws on the table"
            className="w-full object-cover"
          />
          <h2
            className="text-xl  text-yellow-300 font-bold text-center md:text-4xl"
            style={font()}
          >
            A Blog For Pet Lovers And Their Pet Stories
          </h2>
        </div>
        <div className="grid grid-cols-1 mx-auto mt-5 mb-10 gap-4 sm:gap-10 md:grid-cols-2 md:w-[700px] md:mt-0 xl:grid-cols-3 xl:w-[1120px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="grid gap-4 bg-[#2c9381] justify-items-center mx-10 sm:mx-20 md:mx-0 shadow-2xl p-6 rounded-lg"
            >
              <img
                src={post.poster}
                alt="blog-poster"
                className=" h-[12rem] rounded-lg w-full"
              />
              <h2 className="text-md text-yellow-300 sm:text-xl font-bold text-center">
                {post.title}
              </h2>
              <p className="text-justify text-white text-sm sm:text-md ">
                {post.description}
              </p>
              <a
                href={post.read}
                className="text-center text-amber-700 bg-yellow-400 rounded-full p-2 hover:text-amber-900 font-bold"
              >
                Read more
              </a>
            </div>
          ))}
        </div>{" "}
      </div>
    </>
  )
}
