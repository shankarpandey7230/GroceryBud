import React, { useState } from 'react';
import SingleList from './SingleList';

const List = ({ items, removeList, editList }) => {
  return (
    <div className="mt-5">
      {items.map((item) => {
        return (
          <SingleList
            key={item.id}
            item={item}
            removeList={removeList}
            editList={editList}
          />
        );
      })}
    </div>
  );
};

export default List;
