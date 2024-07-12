import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Form = () => {
  return (
    <div className="form-container p-4">
      <h2 className="text-center">Grocery Bud</h2>
      <div className="form-value d-flex justify-content-center mt-5 px-3 flex-grow">
        <input type="text" placeholder="Enter your grocery" />
        <button className="btn btn-info btn-mine">Add Item</button>
      </div>
    </div>
  );
};

export default Form;
