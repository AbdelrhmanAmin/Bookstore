import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
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
      author: 'Frank Herbert',
    },
    {
      id: Math.round(Math.random() * 10),
      title: 'New Earth',
      category: 'Learning',
      author: 'Eckhart Tolle',
    },
    {
      id: Math.round(Math.random() * 10),
      title: 'The Power Of Now',
      category: 'Learning',
      author: 'Eckhart Tolle',
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
