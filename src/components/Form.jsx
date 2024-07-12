import React, { useState } from 'react';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(newItemName);
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="text-center text-capitalize p-5">grocery bud</h4>
      <div className=" form-input-values d-flex justify-content-center ">
        <input
          type="text"
          className="form-input w-75"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          className="btn btn-info text-capitalize p-2 pe-auto"
          type="submit"
        >
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
