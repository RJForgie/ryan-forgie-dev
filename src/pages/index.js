import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="leading-normal text-xl mb-8 w-full sm:w-4/5">
        <div class="mb-2">Hi, I'm Ryan</div>
        <div class="text-3xl leading-tight font-bold mb-2">
          I’m a Developer based in Edinburgh Scotland
        </div>
        <p class="mb-2">
          Right now, I’m working as a
          <span class="font-bold"> Front-End Engineer</span>
        </p>
        <p>
          I'll be adding examples of my work to this site but for now please
          check out my GitHub at the link below.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
