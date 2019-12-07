import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="leading-normal mb-8 w-full sm:w-4/5">
      <div className="text-2xl leading-tight font-bold mb-2 pb-8">
        I’m a software engineer specialised in frontend development for web apps
      </div>
      <p className="text">
        I'll be adding examples of my work to this site but for now please check
        out my GitHub{' '}
        <a
          className="text-blue-700 underline"
          href="https://github.com/RJForgie"
        >
          here
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
