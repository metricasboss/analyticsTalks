import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AvaibleIn = () => {
    const data = useStaticQuery(graphql`
        query AvaibleInQuery {
            apple: file(relativePath: { eq: "Apple-PodCasts.png" }) {
                childImageSharp {
                    fixed(width: 161) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            spotify: file(relativePath: { eq: "spotify.jpg" }) {
                childImageSharp {
                    fixed(width: 193) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            google: file(relativePath: { eq: "Google-Podcasts.jpg" }) {
                childImageSharp {
                    fixed(width: 214) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            pocketC: file(relativePath: { eq: "pocketCast.png" }) {
                childImageSharp {
                    fixed(width: 214) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            anchor: file(relativePath: { eq: "anchor.png" }) {
                childImageSharp {
                    fixed(width: 214) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return (
        <section className="section availableIn-- is-relative">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-full " style={{padding: '0px 20px'}}>
                        <h3 className="subtitle is-size-5 has-text-centered has-text-white">Disponívels nas plataformas</h3>
                        <div className="columns is-vcentered">
                        <div className="column">
                            <Img className="headshot" fixed={data.apple.childImageSharp.fixed} alt="headshot"/>
                        </div>
                        <div className="column">
                            <Img className="headshot" fixed={data.spotify.childImageSharp.fixed} alt="headshot"/>
                            </div>
                        <div className="column">
                            <Img className="headshot" fixed={data.google.childImageSharp.fixed} alt="headshot"/>
                        </div>
                        <div className="column">
                            <Img className="headshot" fixed={data.pocketC.childImageSharp.fixed} alt="headshot"/>
                        </div>
                        <div className="column">
                            <Img className="headshot" fixed={data.anchor.childImageSharp.fixed} alt="headshot"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AvaibleIn

