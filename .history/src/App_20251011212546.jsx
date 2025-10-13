import './App.css';
import Header from './components/Header.jsx';
import { Routes, Route } from "react-router-dom";
import ListBook from './components/ListBook.jsx';


function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
     < Route path='/' element={<ListBook/>}/>
     < Route path='/add' element={<AddBook/>}/>
    </Routes>
    </div>
  );
}

export default App;
