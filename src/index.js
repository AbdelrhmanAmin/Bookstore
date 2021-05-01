import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initalState = {
  books: [
    {
      id: Math.round(Math.random() * 10),
      title: 'Dune',
      category: 'Sci-Fi',
    },
    {
      id: Math.round(Math.random() * 10),
      title: 'New Earth',
      category: 'Learning',
    },
    {
      id: Math.round(Math.random() * 10),
      title: 'The Power Of Now',
      category: 'Learning',
    },
  ],
  filter: '',
};
const store = createStore(rootReducer, initalState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
