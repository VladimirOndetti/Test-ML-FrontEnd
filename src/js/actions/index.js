import axios from 'axios'

import * as types from './../constants/ActionTypes'
// import Config from './../../config/config'

function requestData(action) {
  return { type: action }
}

function receiveData(json, action) {
  return {
    type: action,
    data: json,
  }
}

function receiveError(json, action) {
  return {
    type: action,
    data: json,
  }
}

export function fetchProduct(param) {
  const urlDto = `https://api.mercadolibre.com/sites/MLA/search?q=${param}&limit=4`
  return (dispatch) => {
    dispatch(requestData(types.PRODUCTS_REQUEST))
    return axios({
      url: urlDto,
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    }).then(response => dispatch(receiveData(response.data, types.PRODUCTS_SUCCESS)))
  }
}

export function fetchDetail(param) {
  const urlDto = `https://api.mercadolibre.com/items/${param}`
  return (dispatch) => {
    dispatch(requestData(types.DETAIL_REQUEST))
    return axios({
      url: urlDto,
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    }).then(response => dispatch(receiveData(response.data, types.DETAIL_SUCCESS)))
      .catch(error => dispatch(receiveError(error.response.data, types.DETAIL_FAILURE)))
  }
}

export function fetchDetailText(param) {
  const urlDto = `https://api.mercadolibre.com/items/${param}/description`
  return (dispatch) => {
    dispatch(requestData(types.DETAILTEXT_REQUEST))
    return axios({
      url: urlDto,
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    }).then(response => dispatch(receiveData(response.data, types.DETAILTEXT_SUCCESS)))
      .catch(error => dispatch(receiveError(error.response.data, types.DETAILTEXT_FAILURE)))
  }
}
