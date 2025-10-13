

const  BookForm=()=> {
    const renderInputField = (label,placeholder,name)=>(
        <div className="inputField">
            <br />
       <label>{label}</label>
            <input name={name} type="text" placeholder={placeholder} />
        </div>
    )
  return (
<form >
    
{renderInputField('book Name ','Enter name of book...','name')}
{renderInputField('book Author ','Enter Author of book...','author')}
{renderInputField('book price' ,'Enter price of book...','price')}

</form>
  )
}

export default BookForm