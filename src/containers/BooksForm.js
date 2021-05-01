/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const BooksForm = ({ dispatch }) => {
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
        ...state, title: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state, id: Date.now(),
    });
    dispatch(createBook(state));
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
    <div className="container bg p-0 py-4 border-top ">
      <h3 className="h3 title">
        ADD NEW BOOK
      </h3>
      <form className="form-inline">
        <input type="text" className="title-panel" name="title" onChange={handleChange} />
        <select className="category-panel mx-3" name="category" onClick={handleChange}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary btn-panel" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default connect()(BooksForm);
