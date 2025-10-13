import React from 'react'

const Book = ({book}) => {
    const {id,name,author,price,date}=book;
  return (
    <div className="book">
     <h2>{name}</h2>
     <div className="bookDetail">
        <p>Author: {author}</p>
        <p>Price: {price}</p>
        <p>Date:{new Date(date).toDateString()}</p>
     </div>
     <div className="buttons">
        <button onClick={()=>Navigate(
            './edit/${id)}'
        )}>Edit</button>
        <button>Delete</button>
     </div>
    </div>
  )
}

export default Book