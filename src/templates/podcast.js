import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import Reactmarkdown from "react-markdown"

const PodcastTemplate = ({ data }) => (
  <Layout>
      <SEO title={data.strapiPodcast.title} />
        <section className="section">
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-8">
                        <div className="tile is-child box">
                            <h1 className="title">{data.strapiPodcast.title}</h1>
                            <Reactmarkdown source={data.strapiPodcast.content} escapeHtml={false}/>
                        </div>
                    </div>
                    <div className="tile is-parent is-4 is-vertical">
                        <div className="tile is-child box">
                            <p></p>
                        </div>
                    </div>   
                </div>
            </div>
        </section> 
       
  </Layout>
)

export default PodcastTemplate

export const query = graphql `
    query PodcastTemplate($slug: String!) {
        strapiPodcast(slug: {eq: $slug}) {
            title
            content
            slug
            feature {
                id
                childImageSharp {
                    fluid(maxWidth: 960) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`
