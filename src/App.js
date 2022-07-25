import React,{useState} from 'react'
import AddItem from './AddItem';

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
    // [
    //   { id: 1,
    //     checked: false,
    //     item: "hoho"
    //   },
    //   { id: 2,
    //     checked: false,
    //     item: "rodo"
    //   },
    // ]
    );

  const [newItem, setNewItem] = useState('');

  const setAndSaveItems=(newItems)=>{
    setItems(newItems)
    localStorage.setItem("shoppingList", JSON.stringify(newItems))  
  }

const addItem = (item)=>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = { id, checked: false, item }
  const listItems = [...items, myNewItem]
  setAndSaveItems(listItems);
}

const handleCheck =(id)=>{
    const listItems = items.map((item)=>(item.id === id? {...item, checked:!item.checked} :
    item ))
    //replace by setAndSaveItems(listItems)
    // setItems(listItems)
    // localStorage.setItem("shoppingList", JSON.stringify(listItems)) 
    setAndSaveItems(listItems);       
}

const handleDelete =(id)=>{
    const listItems = items.filter((item) => item.id !== id)
    //replace by setAndSaveItems(listItems)
    // setItems(listItems)
    // localStorage.setItem("shoppingList", JSON.stringify(listItems)) 
    setAndSaveItems(listItems);          
}

const handleSubmit = (e)=> {
  e.preventDefault();
  if(!newItem) return;
  addItem(newItem);
  setNewItem('')
}


  return (
    <div className="App">
      <Header
      title="Grocery List"
      />
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Content
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer
      length={items.length}
      />
    </div>
  );
}

export default App;
