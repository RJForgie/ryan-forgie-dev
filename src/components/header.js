import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Navlink from './navlink'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'

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
              <Close className="nav-icon" />
            ) : (
              <Menu className="nav-icon" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`px-2 pb-4 sm:flex sm:p-0 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <Navlink to="/" linkText="Home" />
        <Navlink to="/about/" linkText="About" />
        <Navlink to="/notes/" linkText="Notes" />
        <Navlink to="/contact/" linkText="Contact" />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
