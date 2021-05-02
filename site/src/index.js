import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer);

render(
  <div style={{
    backgroundColor: '#FFF5EE', height: '100vh',
    minHeight: '100vh'
  }}>
    <Provider store={store}>
      <App />
    </Provider>
  </div >,
  document.getElementById('root')
);