import PropTypes from 'prop-types';

const Book = ({ book: { key, title, category } }) => (
  <tr key={key}>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);
Book.propTypes = {
  book: PropTypes.exact({
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
