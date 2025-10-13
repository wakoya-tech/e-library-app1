import './App.css'
import Header from './components/Header.jsx'
import { Routes, Route } from 'react-router-dom'
import BookList from './pages/BookList.jsx'
import AddBook from './pages/AddBook.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </div>
  )
}

export default App;
