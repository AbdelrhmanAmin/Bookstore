const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <form>
      <input type="text" id="title" name="title" />
      <select id="category" name="category">
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default BooksForm;
