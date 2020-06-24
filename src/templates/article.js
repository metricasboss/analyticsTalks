import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/layout'
import SEO from "../components/seo"

const ArticleTemplate = ({ data }) => (
  <Layout>
       <SEO title={data.strapiArticle.title} />
        <section class="section">
            <div class="container">
                <div class="tile is-ancestor">
                    <div className="tile is-parent is-8">
                        <div className="tile is-child box">
                            <h1 className="title">{data.strapiArticle.title}</h1>
                            <p>{data.strapiArticle.content}</p>
                        </div>
                    </div>
                    <div className="tile is-parent is-4 is-vertical">
                        <div className="tile is-child box">
                            <div className="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                    <Img fluid={`https://bulma.io/images/placeholders/128x128.png`}/>
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <h5 className="title is-6">
                                            <Link className="has-text-grey-dark"
                                              to={`/authors/${data.strapiArticle.author.username}`}>
                                                {data.strapiArticle.author.username}
                                            </Link>
                                        </h5>
                                        <Link className="has-text-grey-dark is-size-7"
                                              to={`/authors/${data.strapiArticle.author.username}`}>Ver mais posts</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tile is-child box">
                            <p></p>
                        </div>
                        <div className="tile is-child box">
                            <h4 className="title is-4">Posts por categoria</h4>
                            <ul>
                                <li><Link className="has-text-grey-dark" 
                                          to={`#`}>
                                            Web Analytics
                                    </Link>
                                </li>
                                <li><Link className="has-text-grey-dark" 
                                          to={`#`}>
                                            Google Analytics
                                    </Link>
                                </li>
                                <li><Link className="has-text-grey-dark"
                                          to={`#`}>
                                            Google Tag Manager
                                    </Link>
                                </li>
                                <li><Link className="has-text-grey-dark"
                                          to={`#`}>
                                            Podcast de Web Analytics
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>   
                </div>
            </div>
        </section> 
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
    query ArticleTemplate($id: String!) {
        strapiArticle(id: {eq: $id}) {
            title
            content
            feature {
                id
                childImageSharp {
                    fluid(maxWidth: 960) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            author {
                id
                username
            }
        }
    }
`
