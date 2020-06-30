import PropTypes from "prop-types"

import React from "react"
import Card from "./card"

const Grid = ({ podcasts }) => (
   
    <div className="columns">
        {podcasts.map(document => (
          <Card key={document.node.id} singlePodcast={document.node} />
        ))} 
    </div>
)

Grid.propTypes = {
    podcasts: PropTypes.array,
}

Grid.defaultProps = {
    podcasts: [],
}

export default Grid