import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(relativePath: { eq: "logo-deep-growth-transparente-300x300.png" }) {
        childImageSharp {
          fixed(width: 179) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div class="columns is-multiline is-centered is-mobile">
      <div class="column  is-narrow brand--">
        <Img className="headshot" fixed={data.logo.childImageSharp.fixed} alt="headshot"/>
      </div>
    </div>
  )
}

export default Header