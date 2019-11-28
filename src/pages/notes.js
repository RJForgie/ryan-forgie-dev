import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

class Notes extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.nodes

    return (
      <Layout>
        {posts.map(node => {
          const title = node.frontmatter.title
          return (
            <article key={node.frontmatter.date}>
              <header>
                <h3
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={node.frontmatter.path}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
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
