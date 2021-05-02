/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => <Book key={book.id} book={book} />)}
    </tbody>
  </table>
);
const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps, null)(BooksList);
