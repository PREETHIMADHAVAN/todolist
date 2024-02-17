import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  

  const [newItem, setNewItem] = useState('');
  const [toDoList, setToDoList] = useState(()=>{
    let existingValue = JSON.parse(localStorage.getItem('toDoList'))
    if(existingValue){
      return existingValue;
    }
    else{
      return []
    }
  });

  useEffect(()=>{
    localStorage.setItem('toDoList',JSON.stringify(toDoList))

  },[toDoList])
  function submitHandler(event){
    event.preventDefault()
    let newObj = {
      key:Math.random(),
      name:newItem,
      completed:false
    }
    setToDoList((currValue)=>{
      return [
        ...currValue,
        newObj
      ]
    })
  }

  function toggleChecked(checkedStatus, key){
    setToDoList((currValue) =>{
      return currValue.map((item) =>{
        if(item.key == key){
          return {
            ...item,
            completed:checkedStatus
          }
        }
        return item;
      })

    })
  }
    
    function deleteItem(key){
      setToDoList((currValue) =>{
        return currValue.filter((item) =>{
          return item.key !=key
        })
      })
    }

  

  return (
    <div className="App">
      <form className='addItemForm' onSubmit={(e) => submitHandler(e)}>
      <input type="text" name="" id="" placeholder='Add New Item' className='addItemTextBox' onChange={(e)=> setNewItem(e.target.value)}/>
      <button className="addItemBtn" type='submit'>Add To List</button>

      </form>
      <div className='todolistContainer'>
        <h2 className="todotitle">To Do List</h2>
        
        
          <ul className="toDoLists">
            {toDoList.length > 0 ? 
              toDoList.map((item,index) =>(
                <li className='listItem' key={item.key}>
                <input type="checkbox" name="" id="" className='listItem_checkbox' checked={item.completed} onChange={(e) =>{toggleChecked(e.target.checked,item.key)}}/>
                <span className='listItem_text'>{item.name}</span>
                <button className='listItem_delete' onClick={()=>deleteItem(item.key)}>Delete</button>
              </li>
              ))
            :(
              <h3 className="empty">No items added</h3>
            )}
            
           
          </ul>
        
      </div>
    </div>
  );
}

export default App;
