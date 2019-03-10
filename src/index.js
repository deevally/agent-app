import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Cookie from 'cookies-js';
import 'toastr/build/toastr.css';
import App from './components/App.jsx';
import rootReducer from './reducers/rootReducer'
import { setCurrentUser } from './actions/ownerLoginAction';
import setAuthorizationToken from './utils/setAuthorizationToken';

setAuthorizationToken();

const token = Cookie.get('jwtToken');


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
)
)

if (token) {
  store.dispatch(setCurrentUser(token));
  setAuthorizationToken(token);
}

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)