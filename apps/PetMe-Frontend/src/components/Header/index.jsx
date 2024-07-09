import React, { useContext, useEffect } from "react"
import { motion } from "framer-motion"
import buttons from "../../helpers/buttonsForHeader"
import logo from "../../assets/logo.png"
import MobileMenu from "./components/MobileHeader"
import HeaderContext from "../../context/HeaderContext"
import { Link, useLocation } from "react-router-dom"

function Header() {
  const { scrollDown } = useContext(HeaderContext)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [activePage, setActivePage] = React.useState("Home")
  const location = useLocation()
  const MOBILE_WIDTH = 1022

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [MOBILE_WIDTH])

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const currentPath = location.pathname
    const currentButton = buttons.find((button) => button.link === currentPath)
    if (currentButton) {
      setActivePage(currentButton.name)
    } else {
      setActivePage("Home")
    }
  }, [location.pathname, buttons])

  console.log(activePage, location.pathname)

  if (isMobile || isMenuOpen) {
    return (
      <MobileMenu
        handleMenu={handleMenu}
        isMenuOpen={isMenuOpen}
        activePage={activePage}
      />
    )
  }

  return (
    <>
      <motion.header
        id="header"
        className="w-full h-[96px]  shadow-md text-black bg-blue-950 flex items-center justify-between"
      >
        <div className="flex items-center md:items-center p-5 ml-10" id="logo">
          <a href="/">
            <img className=" w-14" src={logo} alt="logo" />
          </a>
        </div>

        <nav className="flex items-center gap-3 justify-center">
          {buttons.map((button) => (
            <Link
              key={button.id}
              id={button.id}
              to={button.link === "" ? undefined : button.link}
              className={`items uppercase tracking-widest p-2 font-medium cursor-pointer text-white hover:font-semibold lg:text-[0.7rem] xl:text-[0.9rem]
                ${activePage === button.name && "font-semibold"}`}
            >
              {button.name}
            </Link>
          ))}

          <button
            type="button"
            className="items uppercase tracking-widest p-2 font-medium cursor-pointer text-white hover:font-semibold lg:text-[0.7rem] xl:text-[0.9rem] mr-12"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Contact Us
          </button>
        </nav>
      </motion.header>
      {isModalOpen && (
        <motion.div
          id="contact"
          className="z-[1] fixed overflow-auto bg-slate-100 my-0 mx-auto top-0 left-0 right-0 bottom-0  flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <form
            action="https://formspree.io/f/xayaokzl"
            method="POST"
            className="bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 px-8 pt-6 pb-8"
          >
            <button
              type="button"
              className="float-right text-4xl font-bold text-black"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              X
            </button>
            <h2 className="text-5xl text-black mt-1 mb-2 text-center bold-500">
              CONTACT US
            </h2>
            <p className="text-2xl text-center text-black">
              Any issues! Fill the form below and our team will contact you
              shortly.
            </p>
            <br />
            <div className="mb-4">
              <label
                className="block text-black text-lg font-bold mb-2"
                htmlFor="contact_nom"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                id="contact_nom"
                name="contact_nom"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-lg font-bold mb-2"
                htmlFor="contact_email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                id="contact_email"
                name="contact_email"
                type="email"
                required
                placeholder="hello@petme"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="contact_message"
                className="block text-black text-lg font-bold mb-2"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                id="contact_message"
                name="contact_message"
                required
                rows="6"
                placeholder="Your message"
              />
            </div>
            <div className="flex justify-center gap-10">
              <button
                className="bg-gray-800 hover:bg-gray-900 text-lg text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Contact Us
              </button>
              <button
                type="button"
                className="bg-gray-800 hover:bg-gray-900 text-lg text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </>
  )
}

export default Header
