

const  BookForm=()=> {
    const renderInputField = (label,placeholder,name)=>(
        <div className="inputField">
    
       <label>{label}</label>
            <input name={name} type="text" placeholder={placeholder} />
        </div>
    )
  return (
<form >
    
{renderInputField('book Name ','Enter name of book...','name')}
{renderInputField('book Author ','Enter Author of book...','author')}
{renderInputField('book price' ,'Enter price of book...','price')}
<button type="submit"className="btnForm">submit</button>
</form>
  )
}

export default BookForm