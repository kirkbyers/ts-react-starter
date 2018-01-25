import createHistory from 'history/createBrowserHistory'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

export const rootReducer = combineReducers({
  router: routerReducer,
});
