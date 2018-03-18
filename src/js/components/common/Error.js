import React from 'react'
import PropTypes from 'prop-types'

const Error = props => (
  <div>
    <h3>Tuvimos un Error</h3>
    <p> {props.message} </p>
  </div>
)

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Error
