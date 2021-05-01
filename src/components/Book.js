import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category }, key, handleRemoveBook }) => (
  <ul className="container bg-white my-5 p-5 border">
    <li key={key} className="list-unstyled d-flex flex-column">
      <span>{title}</span>
      <strong>{category}</strong>
      <span className="link">Neko Master</span>
      <div>
        <button type="button" className="btn btn-link">Comments</button>
        <button type="button" className="btn btn-link bordered-sides py-0" onClick={() => handleRemoveBook({ id, title, category })}>Remove</button>
        <button type="button" className="btn btn-link">Edit</button>
      </div>
      <div className="Oval-2" />
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
