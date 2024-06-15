import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.jpg"
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#252628] h-full text-[#EEEEEE] py-6 px-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col lg:flex-row lg:gap-10 justify-center items-center py-10">
          <img src={logo} alt="PetMe logo" className="w-20 h-20 rounded-full" />

          <div className="text-center">
            <h2 className="text-xl font-bold">Pet Me</h2>

            <h2 className="text-sm mt-4">Give a life to an animal in need</h2>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Navigation
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <Link to="#" class="hover:underline">
                  Home
                </Link>
              </li>
              <li class="mb-4">
                <Link to="#about" class="hover:underline">
                  About
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/petnews" class="hover:underline">
                  PetNews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <Link to="/pets" class="hover:underline">
                  Pets
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/blogs" class="hover:underline">
                  Blogs
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/donateanimals" class="hover:underline">
                  Donate Animals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Support
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <Link to="/donate" class="hover:underline">
                  Support Us
                </Link>
              </li>
              <li class="mb-4">
                <Link to="/report" class="hover:underline">
                  SOS Report
                </Link>
              </li>
              <li class="mb-4">
                <Link to="#" class="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-xl text-center">Subscribe to our newsletter</h3>
          <p className="text-md text-center">Get the latest news and updates</p>
          <p className="text-sm text-center">
            delivered straight to your inbox.
          </p>
          <div className="text-center flex items-center justify-center gap-2">
            <input
              className="bg-opacity-50 my-1 p-1 px-2 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xs outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out w-44"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
            <button
              className="bg-[#D65A31] hover:bg-[#F2613F] text-white p-3 px-4 rounded-md text-sm"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-[#393E46] w-full mx-auto my-5"></div>

      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-md text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="https://flowbite.com/" class="hover:underline">
            PetMe™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0">
          <Link to="#">
            <FaFacebookF className="w-4 h-4 hover:text-[#F2613F]" />
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link to="#" className="ms-5">
            <FaInstagram className="w-4 h-4 hover:text-[#F2613F]" />
            <span className="sr-only">Instagram page</span>
          </Link>
          <Link to="https://x.com/Akshita_archer" className="ms-5">
            <FaTwitter className="w-4 h-4 hover:text-[#F2613F]" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            to="https://github.com/akshitagupta15june/PetMe-Prod"
            className="ms-5"
          >
            <FaGithub className="w-4 h-4 hover:text-[#F2613F]" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
