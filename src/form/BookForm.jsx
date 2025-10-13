import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const  BookForm=({handleSubmit})=> {
    const [bookState,setBookState]=useState({
        
        name:'',
        author:'',
        price:'',
    })
    const handleChange=(e)=>{
     id:uuidv4();
     setBookState(  {...bookState,
        [e.target.name]: e.target.value
    })}
const onSubmit=(e)=>{
    e.preventDefault();
    handleSubmit({date: new Date(),
        ...bookState
    });
}
    const renderInputField = (label,placeholder,name)=>(
        <div className="inputField">
    
       <label>{label}</label>
            <input value={bookState[name]} onChange={handleChange} name={name} type="text" placeholder={placeholder} />
        </div>
    )
    const disabledSubmit= !bookState.name || !bookState.author ||
    !bookState.price;
  return (
<form  onSubmit={onSubmit} className="form">
    
{renderInputField('book Name ','Enter name of book...','name')}
{renderInputField('book Author ','Enter Author of book...','author')}
{renderInputField('book price' ,'Enter price of book...','price')}
<button type="submit"className="btnForm" disabled={disabledSubmit}>submit</button>
</form>
  )
}

export default BookForm
