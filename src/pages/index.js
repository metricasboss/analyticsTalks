import { graphql } from "gatsby"

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Img from "gatsby-image"
import AvaibleIn from "../components/availableIn"
import Header from "../components/header"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="wrapContent--">
      <Header siteTitle={data.site.siteMetadata.title} />
      <section className="section sectionAnalyticsTalks">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds has-text-centered">
              <h1 className="title titleAnalyticsTalks has-text-white">O podcast que te ajudará a tomar<br/>decisões com - achimos e + dados.</h1>
              <div className="columns is-centered">
                <div className="column">
                  <h2 className="subtitle subtitleAnalyticsTalks has-text-white">Criado em 2015, o podcast da Métricas Boss é um podcast que aborda temas relacionados a Web Analytics. Publicado mensalmente, o podcast da Métricas Boss visa divertir, informar e provocar reflexões sobre mercado de Web analytics do Brasil. O podcast faz parte do blog da Métricas Boss, um blog que reúne o que há de novidade no mercado de Web analytics.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section sectionAnalyticsTalks">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-quarters">
              <h3 className="subtitle analyticsTalksPatrocinio has-text-centered has-text-white">Patrocínio:</h3>
              <div className="columns is-vcentered">
                <div className="column">
                  <Img className="headshot" fixed={data.prime.childImageSharp.fixed} alt="headshot"/>  
                </div>
                <div className="column">
                  <Img className="headshot" fixed={data.punk.childImageSharp.fixed} alt="headshot"/>
                </div>
                <div className="column">
                  <Img className="headshot" fixed={data.ecrj.childImageSharp.fixed} alt="headshot"/>
                </div>
                <div className="column">
                  <Img className="headshot" fixed={data.bora.childImageSharp.fixed} alt="headshot"/>  
                </div>
              </div>
            </div>
          </div>
        </div>
        <AvaibleIn />
      </section>
    </div>
    <section className="section wrapGrid-- is-relative">
      <div className="container">
        <h3 className="title is-size-3 has-text-centered"> Novos episódios toda terça-feira</h3>
        <Grid podcasts={data.podcasts.edges} />
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    podcasts: allStrapiPodcast {
      edges {
        node {
          id
          title
          slug
          feature {
            id
            childImageSharp {
              fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
          formats {
            name
            slug
            id
          }
        }
      }
    }

    prime: file(relativePath: { eq: "logo_prime.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    ecrj: file(relativePath: { eq: "ecrj.png" }) {
      childImageSharp {
        fixed(width: 201) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    bora: file(relativePath: { eq: "boravender.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
   
    punk: file(relativePath: { eq: "punk.png" }) {
      childImageSharp {
          fixed(width: 171) {
          ...GatsbyImageSharpFixed
          }
      }
    }


  }
`

