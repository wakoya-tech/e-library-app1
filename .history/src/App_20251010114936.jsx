
import './App.css'
import Header from './components/Header.jsx'

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

export default App
