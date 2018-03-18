import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

require('./../../../styles/scss/crumbs.scss')

function mapStateToProps(state) {
  return {
    products: state.products.data,
  }
}

const BreadCrumbs = (props) => {
  const category = (props.products.length > 0)
  && 'No vi lista de categorias en la API'
  return (
    <div className="breadcrumb">
      <div className="container">
        <ul>
          <li>{category}</li>
        </ul>
      </div>
    </div>
  )
}

BreadCrumbs.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

BreadCrumbs.defaultProps = {
  products: [],
}

export default connect(mapStateToProps)(BreadCrumbs)
