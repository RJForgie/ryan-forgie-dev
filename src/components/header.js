import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="bg-teal-700 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="h-10 text-white flex items-center">
          <Link to="/">{siteTitle}</Link>
        </div>
        <div className="sm:hidden">
          <button
            onClick={handleMenuToggle}
            type="button"
            className="block text-white focus:text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <Close className="h-6 w-6 fill-current" />
            ) : (
              <Menu className="h-6 w-6 fill-current" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`px-2 pb-4 sm:flex sm:p-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          className="block mx-2 my-1 text-white text-link half-width"
          to="/"
        >
          Home
        </Link>
        <Link
          className="block mt-1 mx-2 my-1 text-white text-link"
          to="/about/"
        >
          About
        </Link>
        <Link
          className="block mt-1 mx-2 my-1 text-white text-link"
          to="/notes/"
        >
          Notes
        </Link>
        <Link
          className="block mt-1 mx-2 my-1 text-white text-link"
          to="/contact/"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
