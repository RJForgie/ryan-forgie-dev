import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadShot from "../images/HeadShot.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
        I'll be adding examples of my work to this site but for now please check
        out my GitHub at the link below.
      </p>
      {/* <img src={HeadShot} /> */}
    </div>
  </Layout>
)

export default IndexPage
