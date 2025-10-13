import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import Book from"../components/Book"
const ListBook=()=>{
    const {books,setBooks}=useContext(BookContext)
    const handleRemoveBook=(id)=>{
     const filterdBooks = books.filter(
        book => book.id !== id);
     setBooks(filterdBooks)
    }
    return(
       <div className="listbook">
        {books.length ? books.map(
            book=>(
                <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook}/>
            )
        )
    :(<p className="noData">
no books available,Please add some book!
    </p>

    )}
       </div>
    )
}
export default ListBook