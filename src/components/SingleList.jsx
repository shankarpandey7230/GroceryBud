import React, { useState } from 'react';

const SingleList = ({ item, removeList, editList }) => {
  //   const [isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item my-3">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editList(item.id)}
      />
      <p
        style={{ textDecoration: item.completed && 'line-through' }}
        className="text-capitalize"
      >
        {item.name}
      </p>
      <div className="btn-container d-flex ">
        <button className="btn btn-warning edit-btn">Edit</button>
        <button
          className="btn btn-danger remove-btn"
          onClick={() => removeList(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleList;
