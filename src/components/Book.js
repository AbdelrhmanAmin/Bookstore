import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category }, key, handleRemoveBook }) => (
  <ul className="container bg-white my-5 p-5 border">
    <li key={key} className="list-unstyled">
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={() => handleRemoveBook({ id, title, category })}>X</button>
      </td>
    </li>
  </ul>
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
