import BookForm from "../form/BookForm.jsx"
const AddBook = () =>{
    const handleOnSubmit=(book)=>{
        console.log(book);
    }
    return(
        <div className="addForm">
            <BookForm handleSubmit={handleOnSubmit}/>
        </div>

    )
}
export default AddBook