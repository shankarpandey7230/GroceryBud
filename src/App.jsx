import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };
  const removeList = (listId) => {
    const removeItems = items.filter((item) => item.id !== listId);
    setItems(removeItems);
  };
  return (
    <section className="section-center shadow-lg ">
      <Form addItem={addItem} />
      <List items={items} removeList={removeList} />
    </section>
  );
}

export default App;
