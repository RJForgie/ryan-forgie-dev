import React from "react"
import Layout from "../components/layout"
import Code from "../assets/code.svg"

export default () => (
  <Layout>
    <div className="flex flex-col md:flex-row">
      <div>
        <div className="text-2xl pb-10">
          I build web applications with these technologies:
        </div>
        <ul>
          <li>
            <Code className="h-6 w-6 fill-current inline-block mr-2" />
            <span className="inline-block">React</span>
          </li>
          <li>
            <Code className="h-6 w-6 fill-current inline-block mr-2" />
            <span className="inline-block">Modern JavaScript / TypeScript</span>
          </li>
          <li>
            <Code className="h-6 w-6 fill-current inline-block mr-2" />
            <span className="inline-block">
              State Management (Redux / Context)
            </span>
          </li>{" "}
          <li>
            <Code className="h-6 w-6 fill-current inline-block mr-2" />
            <span className="inline-block">
              Mobile First Design (SCSS and Tailwind CSS)
            </span>
          </li>{" "}
          <li>
            <Code className="h-6 w-6 fill-current inline-block mr-2" />
            <span className="inline-block">Static Sites (Gatbsy)</span>
          </li>{" "}
          <li>
            <Code className="h-6 w-6 fill-current inline-block mr-2" />
            <span className="inline-block">
              Unit Testing (Jest / React Testing Library)
            </span>
          </li>{" "}
          <li>
            <Code className="h-6 w-6 fill-current inline-block mr-2" />
            <span className="inline-block text-wra">
              UI Test Automation (Cypress / Selenium)
            </span>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)
