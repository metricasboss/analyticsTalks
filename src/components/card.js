import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Card = ({ singlePodcast }) => (
    <div className="column is-one-quarter">
        <div className="card ext">
            <div className="card-image">
                <Link to={`/${singlePodcast.slug}`}>
                    <figure className="image">
                            <Img fluid={singlePodcast.feature.childImageSharp.fluid}/>
                    </figure>
                </Link>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <h3 className="title is-3 is-size-5">
                            <Link className="has-text-dark"
                                  to={`/${singlePodcast.slug}`}>
                                  {singlePodcast.title}
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Card.propTypes = {
    singlePodcast: PropTypes.object,
}

Card.defaultProps = {
    singlePodcast: {},
}

export default Card