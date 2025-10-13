import BookForm from "../form/BookForm.jsx"
const AddBook = () =>{
    const handleOnSubmit=()=>{
        console.log("Add new book");
    }
    return(
        <div className="addForm">
            <BookForm handleSubmit={handleOnSubmit}/>
        </div>

    )
}
export default AddBook