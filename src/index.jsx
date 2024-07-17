import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import rootStore from './stores/rootStore';
import App from './views/App';
import environment from 'environment';

(async (window) => {
  const initialState = {};
  const history = createBrowserHistory({ basename: environment.route.baseRoute });
  const store = rootStore(initialState, history);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  const render = (Component) => {
    root.render(
      <Provider store={store}>
        <Component history={history} dispatch={store.dispatch} />
      </Provider>
    );
  };

  render(App);
})(window);
