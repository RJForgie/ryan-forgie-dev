import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="leading-normal text-xl mb-8 w-full sm:w-4/5">
      <div className="mb-2">Hi, I'm Ryan</div>
      <div className="text-3xl leading-tight font-bold mb-2">
        I’m a Developer based in Edinburgh Scotland
      </div>
      <p className="mb-2">
        Right now, I’m working as a
        <span className="font-bold"> Front-End Engineer</span>
      </p>
      <p>
        I'll be adding examples of my work to this site but for now please check
        out my GitHub at the link below.
      </p>
    </div>
  </Layout>
)

export default IndexPage
