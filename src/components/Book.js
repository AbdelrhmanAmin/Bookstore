import PropTypes from 'prop-types';

const Book = ({
  book: {
    id, title, category, author,
  }, key, handleRemoveBook,
}) => (
  <div className="container bg-white my-5 px-5 py-4 border">
    <div className="grid-book">
      <ul className="mx-0 px-0">
        <li key={key} className="list-unstyled d-flex flex-column">
          <span className="text-opacity-2 py-2">{category}</span>
          <strong className="h3 my-0">{title}</strong>
          <span className="link">{author}</span>
          <div className="mt-3">
            <button type="button" className="pl-0 undecorate btn btn-link">Comments</button>
            <button type="button" className=" undecorate btn btn-link bordered-sides py-0" onClick={() => handleRemoveBook({ id, title, category })}>Remove</button>
            <button type="button" className=" undecorate btn btn-link">Edit</button>
          </div>
        </li>
      </ul>
      <div className="d-flex align-items-center border-right pr-3 mr-5">
        <div className="Oval-2 mr-3" />
        <div className="d-flex flex-column">
          <strong className="h3 mb-0">100%</strong>
          <span className="text-opacity-1">Completed</span>
        </div>
      </div>
      <div className="d-flex flex-column">
        <span className="text-opacity-1">CURRENT CHAPTER:</span>
        <span className="my-3">Chapter 7</span>
        <button type="button" className="update-progress btn btn-primary">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);
Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.number.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
