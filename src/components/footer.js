import React from 'react'
import GitHubIcon from '../assets/github.svg'
import LinkedInIcon from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 bg-teal-700">
        <div className="flex items-center justify-between h-10 text-white bg-teal-700">
          <a href="https://github.com/RJForgie">
            <GitHubIcon className="nav-icon mr-8" />
          </a>
          <a href="https://www.linkedin.com/in/ryan-forgie">
            <LinkedInIcon className="nav-icon mr-8" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
