import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
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
    toast.success('item added to the list');
  };
  const removeList = (listId) => {
    const removeItems = items.filter((item) => item.id !== listId);
    setItems(removeItems);
    localStorageSetup(removeItems);
    toast.success('item deleted successfully');
  };

  const editList = (listId) => {
    const editItems = items.map((item) => {
      if (item.id === listId) {
        const editItem = { ...item, completed: !item.completed };
        return editItem;
      }
      return item;
    });
    setItems(editItems);
    localStorageSetup(editItems);
  };
  return (
    <section className="section-center shadow-lg ">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <List items={items} removeList={removeList} editList={editList} />
    </section>
  );
}

export default App;
