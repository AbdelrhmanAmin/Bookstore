import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../style.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
