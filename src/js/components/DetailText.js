import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDetailText } from './../actions'
import Loading from './common/Loading'
import Error from './common/Error'


require('./../../styles/scss/productDetail.scss')

function mapStateToProps(state) {
  return {
    detail: state.detail,
    detailText: state.detailText,
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    fetchDetailText: bindActionCreators(fetchDetailText, dispatch),
  }
  return { actions }
}

@connect(mapStateToProps, mapDispatchToProps)
class ProductDetailText extends Component {
  componentDidMount() {
    const { detail, actions } = this.props
    actions.fetchDetailText(detail.data.id)
  }

  render() {
    const { detailText } = this.props
    const payload = (detailText.data) ?
    (<div>
      <p> {detailText.data.plain_text} </p>
      <div dangerouslySetInnerHTML={{ __html: detailText.data.text }} />
    </div>) : <Loading />
    return (
      <div>
        {(detailText.error) ? <Error message={detailText.error.message} /> : payload}
      </div>
    )
  }
}

ProductDetailText.propTypes = {
  actions: PropTypes.objectOf(PropTypes.object),
  detailText: PropTypes.objectOf(PropTypes.object),
  detail: PropTypes.objectOf(PropTypes.object),
}

ProductDetailText.defaultProps = {
  actions: {},
  detailText: {},
  detail: {},
}

export default ProductDetailText
