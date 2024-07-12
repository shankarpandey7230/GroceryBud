import { useState } from 'react';

import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className="container d-flex flex-column  align-items-center">
      <Form />
      <List />
    </div>
  );
}

export default App;
