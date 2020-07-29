import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import Img from "gatsby-image"
import Reactmarkdown from "react-markdown"
import Header from "../components/header"

const PodcastTemplate = ({ data }) => (
  <Layout>
        <SEO title={data.podcast.title} />
        <div className="wrapContent-- podcastHeader">
            <Header />
        </div>
        <section className="section podcastContent">
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-8">
                        <div className="tile is-child box">
                            <h1 className="title">{data.podcast.title}</h1>
                            <Reactmarkdown source={data.podcast.content} escapeHtml={false}/>
                        </div>
                    </div>
                    <div className="tile is-parent is-4 is-vertical">
                        <div className="tile is-child box">
                             <div className="column">
                                <Link to='https://metricasboss.com.br/'>
                                    <Img className="headshot" fluid={data.mbprime.childImageSharp.fluid} alt="headshot"/>
                                </Link>
                            </div>
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
        podcast: strapiPodcast(slug: {eq: $slug}) {
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
        mbprime: file(relativePath: { eq: "mbprime-ad_1080x1080.png" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
