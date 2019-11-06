import React from "react"
import Layout from "../components/layout"
import headshot from "../images/headshot.jpg"

export default () => (
  <Layout>
    <div className="flex flex-col md:flex-row">
      <img
        src={headshot}
        alt="headshot"
        className="h-56 w-56 shadow-l rounded-full border-8"
      />
      <div className="bg-white ml-16">
        <div className="text-2xl">
          I build web applications (mostly with React)
        </div>
        <div className="text">Here are my Core Skills:</div>
        <ul className="list-disc">
          <li>Modern JavaScript / TypeScript</li>
          <li>State Management (Redux / Context)</li>
          <li>Mobile First Design (SCSS and Tailwind CSS)</li>
          <li>Static Sites (Gatbsy)</li>
          <li>Unit Testing (Jest / Enzyme / React Testing Library)</li>
          <li>UI Test Automation (Cypress / Selenium)</li>
        </ul>
      </div>
    </div>
  </Layout>
)
