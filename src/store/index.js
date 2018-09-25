import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import search from './reducers/search'

export default createStore(
  combineReducers({
    search,
  }),
  applyMiddleware (thunk)
)