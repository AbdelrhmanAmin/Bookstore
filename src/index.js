import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/index';

const initalState = {
  books: [
    {
      id: Math.random(),
      title: 'Dune',
      category: 'Science Fiction',
    },
    {
      id: Math.random(),
      title: 'New Earth',
      category: 'Spirituality',
    },
    {
      id: Math.random(),
      title: 'The Power Of Now',
      category: 'Spirituality',
    },
  ],
};
const store = createStore(rootReducer, initalState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
