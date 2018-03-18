import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducers'

const env = process.env.NODE_ENV
const middleware = [promise(), thunk, routerMiddleware(history)]

if (env === 'development') {
  middleware.push(logger)
}

const composeEnhancers = compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

const store = createStore(reducer, enhancer)

export default store
