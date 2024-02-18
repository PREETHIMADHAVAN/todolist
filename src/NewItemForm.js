import { useState } from "react";

const NewItemForm = ({addToDoItem}) =>{

    const [newItem, setNewItem] = useState('');

    function submitHandler(event){
        event.preventDefault()
        let newObj = {
          key:Math.random(),
          name:newItem,
          completed:false
        }
        addToDoItem(newObj)
        setNewItem('')
      
      }

    return (
        <form className='addItemForm' onSubmit={(e) => submitHandler(e)}>
        <input type="text" name="" id="" placeholder='Add New Item' className='addItemTextBox' value={newItem ?? ''} onChange={(e)=> setNewItem(e.target.value)}/>
        <button className="addItemBtn" type='submit'>Add To List</button>
  
        </form>

    )
}

export default NewItemForm;