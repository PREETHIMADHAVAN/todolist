
const Item = ({item,toggleChecked,deleteItem}) =>{
    return (
        
        <li className='listItem' >
            <input type="checkbox" name="" id="" className='listItem_checkbox' checked={item.completed} onChange={(e) =>{toggleChecked(e.target.checked,item.key)}}/>
            <span className='listItem_text'>{item.name}</span>
            <button className='listItem_delete' onClick={()=>deleteItem(item.key)}>Delete</button>
        </li>
    )
}

export default Item;