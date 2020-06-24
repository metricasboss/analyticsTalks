import { graphql } from "gatsby"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
      <section className="section">
        <div className="container">
          <h2 className="title has-text-dark has-text-weight-bold">Últimos posts do blog</h2>
          <Grid posts={data.googleAnalytics.edges} />
        </div>
      </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    googleAnalytics: allStrapiArticle(
      filter: {categories: {elemMatch: {slug: {eq: "web-analytics"}}}},
      limit: 4
      ) {
      edges {
        node {
          id,
          title,
          content,
          feature {
            id
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          author {
            id,
            username
          },
          categories {
            id,
            name,
            slug
          }
        }
      }
    }
  }
`

