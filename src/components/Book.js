import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category }, key }) => (
  <tr key={key}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);
Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.number.isRequired,
};

export default Book;
