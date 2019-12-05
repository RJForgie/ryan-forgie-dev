import React from 'react'
import { Link } from 'gatsby'
import { string } from 'prop-types'

const Navlink = ({ to, linkText }) => {
  return (
    <Link className="block mt-1 mx-2 my-1 text-white text-link" to={to}>
      {linkText}
    </Link>
  )
}

Navlink.propTypes = {
  to: string,
  linkText: string,
}

export default Navlink
