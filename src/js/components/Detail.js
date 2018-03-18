import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDetail } from './../actions'
import Loading from './common/Loading'
import Error from './common/Error'
import DetailText from './DetailText'

require('./../../styles/scss/productDetail.scss')

function mapStateToProps(state) {
  return {
    detail: state.detail,
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    fetchDetail: bindActionCreators(fetchDetail, dispatch),
  }
  return { actions }
}

@connect(mapStateToProps, mapDispatchToProps)
class ProductDetail extends Component {
  componentDidMount() {
    const { match, actions } = this.props
    actions.fetchDetail(match.params.id)
  }

  render() {
    const { detail } = this.props
    const payload = (Object.prototype.hasOwnProperty.call(detail.data, 'id')) ?
    (<div className="detalleProducto">
      <div className="container">
        <div className="left">
          <div className="img" style={{ backgroundImage: `url( ${detail.data.pictures[0].url} )` }} />
          <h3>Descripción del producto</h3>
          <DetailText />
        </div>
        <div className="right">
          <p>{detail.data.condition} - {detail.data.sold_quantity} vendidos</p>
          <p className="title">{detail.data.title}</p>
          <p className="price">$ {detail.data.price}</p>
          <button type="button" className="btn">Comprar</button>
        </div>
      </div>
    </div>) : <Loading />
    return (
      <div>
        {(detail.error) ? <Error message={detail.error.message} /> : payload}
      </div>
    )
  }
}

ProductDetail.propTypes = {
  actions: PropTypes.objectOf(PropTypes.object),
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object,
  }).isRequired,
  detail: PropTypes.objectOf(PropTypes.object),
}

ProductDetail.defaultProps = {
  actions: {},
  detail: {},
}

export default ProductDetail
