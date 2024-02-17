import './App.css';

function App() {
  return (
    <div className="App">
      <form className='addItemForm'>
      <input type="text" name="" id="" placeholder='Add New Item' className='addItemTextBox'/>
      <button className="addItemBtn">Add To List</button>

      </form>
      <div className='todolistContainer'>
        <h2 className="todotitle">To Do List</h2>
        
          <ul className="toDoLists">
            <li className='listItem'>
              <input type="checkbox" name="" id="" className='listItem_checkbox'/>
              <span className='listItem_text'>Item 1</span>
              <button className='listItem_delete'>Delete</button>
            </li>
            <li className='listItem'>
              <input type="checkbox" name="" id="" className='listItem_checkbox'/>
              <span className='listItem_text'>Item 2</span>
              <button className='listItem_delete'>Delete</button>
            </li>
          </ul>
        
      </div>
    </div>
  );
}

export default App;
