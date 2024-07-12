import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [items, setItems] = useState([]);
  return (
    <section className="section-center shadow-lg ">
      <Form />
    </section>
  );
}

export default App;
