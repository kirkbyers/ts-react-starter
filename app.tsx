import createHistory from 'history/createBrowserHistory'
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reboot from 'material-ui/Reboot';

import { HomeLayout, NotFoundLayout } from './layouts';
import { rootReducer } from './reducers';

const history = createHistory();

const historyMiddleware = routerMiddleware(history);

let store = createStore(
  rootReducer,
  applyMiddleware(historyMiddleware),
  applyMiddleware(thunk)
);

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Reboot />
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/" component={HomeLayout} />
              <Route component={NotFoundLayout} />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}
