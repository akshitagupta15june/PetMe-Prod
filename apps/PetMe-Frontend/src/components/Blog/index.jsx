import React, { useState } from 'react';
import { posts } from '../../helpers/postsForBlog';
import HeroPhoto from '../../assets/cats-dogs.jpg';

export function BlogTemplate() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogPosts = posts.filter((post) => {
    const { title, description } = post;
    const searchText = `${title} ${description}}`.toLowerCase();
    return searchText.includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div
        className="flex flex-col h-[150px] items-center justify-start w-full md:mb-0 md:h-[300px] xl:h-[400px]"
      >
        <img
          src={HeroPhoto}
          alt="Shows 2 cats and 2 dogs looking direct to the user, with their paws on the table"
          className="w-full object-cover"
        />
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={filteredBlogPosts}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
        <h2 className="text-xl font-bold text-center md:text-3xl">A Blog For Pet Lovers And Their Pet Stories</h2>
      </div>


      {searchQuery.length > 0 ? filteredBlogPosts.length > 0 ?
        <div className="grid grid-cols-1 mx-auto mt-5 mb-10 gap-4 sm:gap-10 md:grid-cols-2 md:w-[700px] md:mt-0 xl:grid-cols-3 xl:w-[1120px]">
          {filteredBlogPosts.map((post) => (
            <div key={post.id} className="grid gap-4 justify-items-center mx-10 sm:mx-20 md:mx-0 shadow-2xl p-6 rounded-lg">
              <img
                src={post.poster}
                alt="blog-poster"
                className="w-[15rem] h-[12rem] rounded-lg"
              />
              <h2 className="text-md sm:text-xl font-bold text-center">{post.title}</h2>
              <p className="text-justify text-sm sm:text-md ">{post.description}</p>
              <a
                href={post.read}
                className="text-center text-amber-700 hover:text-amber-900 font-bold"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
        : (
          <div className='w-full flex my-10 items-center justify-center text-3xl text-[red]'>
            No Blog Found with these keywords.
          </div>
        ) :
        <div className="grid grid-cols-1 mx-auto mt-5 mb-10 gap-4 sm:gap-10 md:grid-cols-2 md:w-[700px] md:mt-0 xl:grid-cols-3 xl:w-[1120px]">

          {posts.map((post) => (
            <div key={post.id} className="grid gap-4 justify-items-center mx-10 sm:mx-20 md:mx-0 shadow-2xl p-6 rounded-lg">
              <img
                src={post.poster}
                alt="blog-poster"
                className="w-[15rem] h-[12rem] rounded-lg"
              />
              <h2 className="text-md sm:text-xl font-bold text-center">{post.title}</h2>
              <p className="text-justify text-sm sm:text-md ">{post.description}</p>
              <a
                href={post.read}
                className="text-center text-amber-700 hover:text-amber-900 font-bold"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      }
    </>
  );
}
