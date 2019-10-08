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
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <h1 className="h-8 text-gray-500">
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <div className="sm:hidden">
          <button
            onClick={handleMenuToggle}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
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
        className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          className="block px-2 py-1 text-white rounded hover:bg-gray-800 font-semibold"
          to="/"
        >
          Home
        </Link>
        <Link
          className="block mt-1 px-2 py-1 text-white rounded hover:bg-gray-800 font-semibold sm:mt-0 sm:ml-2"
          to="/about/"
        >
          About
        </Link>
        <Link
          className="block mt-1 px-2 py-1 text-white rounded hover:bg-gray-800 font-semibold sm:mt-0 sm:ml-2"
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
