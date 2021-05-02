const booksReducer = (state = [], action) => {
  const CREATE = 'CREATE_BOOK';
  const REMOVE = 'REMOVE_BOOK';
  if (action.type === CREATE) {
    const result = [...state, action.book];
    return result;
  }
  if (action.type === REMOVE) {
    const filteredBooks = state.books.filter((book) => book.id !== action.book.id);
    return { ...state, books: filteredBooks };
  }

  return state;
};

export default booksReducer;
