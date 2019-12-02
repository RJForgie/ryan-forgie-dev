import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

class Notes extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.nodes

    return (
      <Layout>
        <div className="border w-full">
          <h4 className="py-3 px-5 border-b">Test Title</h4>
          <div className="p-5">
            <ul className="list-disc list-inside">
              {posts.map(node => {
                const title = node.frontmatter.title
                return (
                  <li key={node.frontmatter.date}>
                    <Link
                      className="underline text-blue-700"
                      to={node.frontmatter.path}
                    >
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Notes

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          path
          date
          description
          title
        }
      }
    }
  }
`
