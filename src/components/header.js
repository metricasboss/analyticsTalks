import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(relativePath: { eq: "logo-analyticsTalks-invert.png" }) {
        childImageSharp {
          fixed(width: 220) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="columns is-multiline is-centered is-mobile">
      <div className="column  is-narrow brand--">
        <Link to='/'>
          <Img className="headshot" fixed={data.logo.childImageSharp.fixed} alt="headshot"/>
        </Link>
      </div>
    </div>
  )
}

export default Header