/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const BooksForm = ({ addBook }) => {
  const [state, setState] = useState({
    id: Date.now(),
    title: '',
    category: 'Action',
  });
  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setState({
        ...state, title: e.target.value,
      });
    }
    if (e.target.name === 'category') {
      setState({
        ...state, category: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state, id: Date.now(),
    });
    addBook(state);
  };
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <form>
      <input type="text" id="title" name="title" onChange={handleChange} />
      <select id="category" onChange={handleChange} name="category">
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit" onClick={handleSubmit}>Add</button>
    </form>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
