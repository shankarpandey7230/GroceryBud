import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import List from './components/List';

const localStorageSetup = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorageData = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
};

function App() {
  const [items, setItems] = useState(getLocalStorageData);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    localStorageSetup(newItems);
  };
  const removeList = (listId) => {
    const removeItems = items.filter((item) => item.id !== listId);
    setItems(removeItems);
    localStorageSetup(removeItems);
  };
  return (
    <section className="section-center shadow-lg ">
      <Form addItem={addItem} />
      <List items={items} removeList={removeList} />
    </section>
  );
}

export default App;
