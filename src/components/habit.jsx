import React, { memo, useEffect, useRef } from 'react';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const liRef = useRef();
  useEffect(() => {
    liRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  const handleDelete = () => {
    onDelete(habit);
  };

  return (
    <li ref={liRef} className="habit">
      <div className="habit-text">
        <span className="habit-name">{habit.name}</span>
        <span className="habit-count">{habit.count}</span>
      </div>
      <div className="habit-bts">
        <button className="habit-btn habit-increase" onClick={handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-btn habit-decrease" onClick={handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-btn habit-delete" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
});

export default Habit;
