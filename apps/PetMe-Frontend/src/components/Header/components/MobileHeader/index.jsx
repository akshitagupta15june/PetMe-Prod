import React from "react"
import propTypes from "prop-types"
import { motion } from "framer-motion"
import logo from "../../../../assets/images/logo.jpg"
import MenuToggle from "./MenuToggle"
import MenuItem from "./MenuItem"
import { Link } from "react-router-dom"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

function MobileMenu(props) {
  const { handleMenu, isMenuOpen } = props

  return (
    <header
      id="header"
      className="text-black border-b shadow-md bg-white flex items-center justify-between"
    >
      <div
        className={`flex items-center md:items-center p-5 ml-14 ${isMenuOpen && "hidden"}`}
        id="logo"
      >
        <Link to="/">
          <img className="w-20" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="overflow-hidden">
        <MenuToggle handleMenu={handleMenu} isMenuOpen={isMenuOpen} />

        <motion.nav
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className={
            isMenuOpen
              ? "block w-full h-full lg:block"
              : "hidden w-full lg:block"
          }
        >
          <MenuItem activePage={props.activePage} />
        </motion.nav>
      </div>
    </header>
  )
}

MobileMenu.propTypes = {
  handleMenu: propTypes.func.isRequired,
  isMenuOpen: propTypes.bool.isRequired,
  activePage: propTypes.string.isRequired,
}

export default MobileMenu
