import React from "react"
import GitHubIcon from "../assets/github.svg"
import LinkedInIcon from "../assets/linkedin.svg"

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 bg-teal-700">
        <div className="flex items-center justify-between h-10 bg-teal-700">
          <a href="https://github.com/RJForgie">
            <GitHubIcon className="h-6 w-6 mr-8 fill-current text-white" />
          </a>
          <a href="https://www.linkedin.com/in/ryan-forgie">
            <LinkedInIcon className="h-6 w-6 mr-8 fill-current text-white" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
