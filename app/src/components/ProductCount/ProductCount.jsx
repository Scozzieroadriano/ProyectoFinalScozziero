import React, { useState } from 'react';

const ProductCount = ({ initialValue, onValueChange }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onValueChange(newCount);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onValueChange(newCount);
    }
  };

  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-secondary" onClick={decrement}>-</button>
      <span className="btn btn-light">{count}</span>
      <button type="button" className="btn btn-secondary" onClick={increment}>+</button>
    </div>
  );
};

export default ProductCount;
