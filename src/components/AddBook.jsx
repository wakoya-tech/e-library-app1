import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext.jsx";
import BookForm from "../form/BookForm.jsx";
const AddBook = () => {
  const navigate = useNavigate();
  // useContext to get books and setBooks from your context
  const { books, setBooks } = useContext(BookContext);
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate('/');
  }
  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  );
}
export default AddBook;
