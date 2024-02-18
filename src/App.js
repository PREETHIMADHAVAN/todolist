import { useEffect, useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import NewItemForm from './NewItemForm';

const App = () => {

  

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
    console.log(toDoList)
    localStorage.setItem('toDoList',JSON.stringify(toDoList))

  },[toDoList])

  function addToDoItem(newObj){
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
      <NewItemForm addToDoItem={addToDoItem}/>
      <div className='todolistContainer'>
        <h2 className="todotitle">To Do List</h2>
        <ToDoList toDoList={toDoList} toggleChecked={toggleChecked} deleteItem={deleteItem}></ToDoList>
        
         
        
      </div>
    </div>
  );
}

export default App;
