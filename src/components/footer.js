import React from "react"
import { Link } from "gatsby"
import GitHubIcon from "../assets/github.svg"
import LinkedInIcon from "../assets/linkedin.svg"
import GatsbyIcon from "../assets/gatsby.svg"

const Footer = () => {
  return (
    <footer className="text-gray-500">
      <div className="flex flex-col lg:flex-row items-center justify-between py-8 bg-gray-900">
        <div className="flex items-center bg-gray-900">
          <Link>
            <GitHubIcon className="h-6 w-6 mr-8 fill-current" />
          </Link>
          <Link>
            <LinkedInIcon className="h-6 w-6 mr-8 fill-current" />
          </Link>
          <Link>
            <GatsbyIcon className="h-6 w-6 mr-8 fill-current" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
