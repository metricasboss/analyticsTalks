import PropTypes from "prop-types"

import React from "react"
import Card from "./card"

const Grid = ({ posts }) => (
    <div className="columns">
        {posts.map(document => (
          <Card key={document.node.id} singlePost={document.node} />
        ))} 
    </div>
)

Grid.propTypes = {
    posts: PropTypes.array,
}

Grid.defaultProps = {
    posts: [],
}

export default Grid