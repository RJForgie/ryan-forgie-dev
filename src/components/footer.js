import React from "react"
import { Link } from "gatsby"
import GitHubIcon from "../assets/github.svg"
import LinkedInIcon from "../assets/linkedin.svg"
import GatsbyIcon from "../assets/gatsby.svg"

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-3 bg-gray-700">
        <div className="flex items-center h-10 bg-gray-700">
          <Link>
            <GitHubIcon
              className="h-6 w-6 mr-8 fill-current text-white"
              to="test"
            />
          </Link>
          <Link>
            <LinkedInIcon
              className="h-6 w-6 mr-8 fill-current text-white"
              to="test"
            />
          </Link>
          <Link>
            <GatsbyIcon
              className="h-6 w-6 mr-8 fill-current text-white"
              to="test"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
