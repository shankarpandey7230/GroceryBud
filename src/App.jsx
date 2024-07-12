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
  return (
    <section className="section-center shadow-lg ">
      <Form addItem={addItem} />
    </section>
  );
}

export default App;
