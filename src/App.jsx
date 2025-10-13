import './App.css';
import Header from './components/Header.jsx';
import { Routes, Route } from "react-router-dom";
import ListBook from './components/ListBook.jsx';
import AddBook from './components/AddBook.jsx';
import BookProvider from './context/BookContext.jsx';
import EditBook from './components/EditBook.jsx';

function App() {
  return (
    <BookProvider> {/* Wrap everything that might use context */}
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<ListBook />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/edit/:id' element={<EditBook />} />
        </Routes>
      </div>
    </BookProvider>
  );
}
export default App;
