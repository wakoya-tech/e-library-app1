import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import Book from"../components/Book"
const ListBook=()=>{
    const {books,setBooks}=useContext(BookContext)
    
    return(
       <div className="listbook">
        {books.length ? books.map(
            book=>(
                <Book book={book} key={book.id}/>
            )
        )
    :(<p className="noData">
no boooks avaliable,Please add some book!
    </p>

    )}
       </div>
    )
}
export default ListBook