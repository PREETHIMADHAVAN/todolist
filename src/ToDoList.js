import { useEffect } from "react";
import Item from "./Item";

const ToDoList = ({toDoList,toggleChecked,deleteItem}) =>{

    
    return (
        <ul className="toDoLists">
        {toDoList.length > 0 ? 
          toDoList.map((item) =>(
            <Item item={item} toggleChecked={toggleChecked} deleteItem={deleteItem} key={item.key}/>
          ))
        :(
          <h3 className="empty">No items added</h3>
        )}
        
       
      </ul>
    )

}
export default ToDoList;