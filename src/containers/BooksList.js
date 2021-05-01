import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, filter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const handleRemoveBook = (book) => {
    const { removeBook } = props;
    removeBook(book);
  };
  const handleFilterChange = (category) => {
    const { filterBook } = props;
    filterBook(category);
  };
  const filterBooks = (filter, books) => (
    filter === '' ? books
      : books.filter((book) => book.category === filter));
  const { books, filter } = props;
  const filteredBooks = filterBooks(filter, books);
  const bookList = filteredBooks.map((book) => (
    <Book
      book={book}
      handleRemoveBook={handleRemoveBook}
      key={Math.random()}
    />
  ));
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        {bookList}
        <tbody />
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
};
BooksList.defaultProps = {
  filter: '',
};
const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
  filterBook: (category) => {
    dispatch(filter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
