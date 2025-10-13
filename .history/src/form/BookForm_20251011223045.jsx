

const  BookForm=()=> {
    const renderInputField = (label,placeholder,name)=>(
        <div className="inputField">
       <label>{label}</label>
            <input name={name} type="text" placeholder={placeholder} />
        </div>
    )
  return (
<form >
    
{renderInputField('book Name','Enter name of book...','name')}
{renderInputField('book Author','Enter Author of book...','name')}
{renderInputField('book price','Enter price of book...','name')}

</form>
  )
}

export default BookForm