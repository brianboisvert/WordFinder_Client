import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import configureStore from './store/configureStore';


const store = configureStore();
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
