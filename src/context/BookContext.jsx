
import { Children, createContext, useState } from "react"
export const BookContext=createContext 
function BookProvider(Children) {
    const [books,setBooks]=useState([]);
  return (
   <BookProvider>
{ Children}
   </BookProvider>
  )
}

export default BookProvider