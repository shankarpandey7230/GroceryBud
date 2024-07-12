import React, { useState } from 'react';
import SingleList from './SingleList';

const List = ({ items, removeList }) => {
  return (
    <div className="bg-white mt-5">
      {items.map((item) => {
        return <SingleList key={item.id} item={item} removeList={removeList} />;
      })}
    </div>
  );
};

export default List;
