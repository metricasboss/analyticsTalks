import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      logoFooter: file(relativePath: { eq: "logo-rodape-mb-prime.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <footer className="footer has-text-centered">
      <Link to='https://metricasboss.com.br/'>
        <Img className="headshot" fixed={data.logoFooter.childImageSharp.fixed} alt="headshot"/>
      </Link>
    </footer>
  )
}

export default Footer