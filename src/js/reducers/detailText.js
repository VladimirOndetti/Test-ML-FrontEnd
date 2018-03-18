import * as types from '../constants/ActionTypes'

const dataState = {
  data: {},
  fetching: false,
  fetched: false,
  error: null,
}

const detailTextReducer = (state = dataState, action) => {
  switch (action.type) {
    case types.DETAILTEXT_REQUEST: {
      return {
        ...state,
        fetching: true,
      }
    }
    case types.DETAILTEXT_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.data,
      }
    }
    case types.DETAILTEXT_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data,
      }
    }
    default:
      return state
  }
}

export default detailTextReducer
