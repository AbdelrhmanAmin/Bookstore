import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, filterBook } from '../actions/index';
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
      <div className="d-flex align-items-center justify-content-between nav bg-white py-3">
        <div className="d-flex align-items-center">
          <strong className="headline h3">
            <span role="img" aria-label="img">🐱</span>
            Neko Bookstore
          </strong>
          <span className="px-5 text-opacity-2">BOOKS</span>
          <span className=" pr-1 text-opacity-1">CATEGORIES:</span>
          <CategoryFilter handleFilterChange={handleFilterChange} />
        </div>
        <div className="icon-circle">
          <FontAwesomeIcon icon={faCat} className="icon-user" size="1x" />
        </div>
      </div>
      <div className="">
        {bookList}
      </div>
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
    dispatch(filterBook(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
