import React, { useCallback, useState } from 'react';
import './app.css';
import Header from './components/header';
import AddForm from './components/addForm';
import Habits from './components/habits';

const App = props => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Exercising', count: 0 },
    { id: 2, name: 'Coding', count: 0 },
    { id: 3, name: 'Reading', count: 0 },
  ]);

  const handleAdd = useCallback(name => {
    setHabits(habits => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []);

  const handleIncrement = useCallback(
    habit =>
      setHabits(habits =>
        habits.map(el => {
          if (el.id === habit.id) {
            return { ...habit, count: habit.count + 1 };
          }
          return el;
        })
      ),
    []
  );

  const handleDecrement = useCallback(
    habit =>
      setHabits(habits =>
        habits.map(el => {
          if (el.id === habit.id) {
            const count = habit.count - 1;
            return { ...habit, count: count < 0 ? 0 : count };
          }
          return el;
        })
      ),
    []
  );

  const handleDelete = useCallback(
    habit => setHabits(habits => habits.filter(el => el.id !== habit.id)),
    []
  );

  const handleReset = useCallback(
    () =>
      setHabits(habits =>
        habits.map(habit => {
          if (habit.count !== 0) {
            return { ...habit, count: 0 };
          }
          return habit;
        })
      ),
    []
  );

  const handleClear = useCallback(() => setHabits(habits => (habits = [])), []);

  return (
    <>
      <Header tracked={habits.filter(habit => habit.count > 0).length} />
      <AddForm onAdd={handleAdd} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
      <button className="btn" onClick={handleReset}>
        Reset Counts
      </button>
      <button className="btn" onClick={handleClear}>
        Clear All
      </button>
    </>
  );
};

export default App;
