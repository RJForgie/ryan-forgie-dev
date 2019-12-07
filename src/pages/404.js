import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-col md:flex-row">
      <div className="text-2xl pb-8">Page not found</div>
      <p className="text">
        To return to the home page click{' '}
        <Link to="/" className="text-blue-700 underline">
          here
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
