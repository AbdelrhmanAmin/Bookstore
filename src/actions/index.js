export const createBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

export const filterBook = (category) => ({
  type: 'CHANGE_FILTER',
  category,
});
