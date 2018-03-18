import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import products from './products'
import detail from './detail'
import detailText from './detailText'


export default combineReducers({
  products,
  detail,
  detailText,
  router: routerReducer,
})
