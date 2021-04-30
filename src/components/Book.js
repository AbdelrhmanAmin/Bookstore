import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category }, key, handleRemoveBook }) => (
  <tr key={key}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button type="button" onClick={() => handleRemoveBook({ id, title, category })}>X</button>
    </td>
  </tr>
);
Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.number.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
