

const  BookForm=({handleSubmit})=> {
const onSubmit=(e)=>{
    e.preventDefault();
    handleSubmit();
}
    const renderInputField = (label,placeholder,name)=>(
        <div className="inputField">
    
       <label>{label}</label>
            <input name={name} type="text" placeholder={placeholder} />
        </div>
    )
  return (
<form onSubmit={onSubmit} className="form">
    
{renderInputField('book Name ','Enter name of book...','name')}
{renderInputField('book Author ','Enter Author of book...','author')}
{renderInputField('book price' ,'Enter price of book...','price')}
<button type="submit"className="btnForm">submit</button>
</form>
  )
}

export default BookForm