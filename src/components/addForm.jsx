import React, { memo } from 'react';

const AddForm = memo(props => {
  const inputRef = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();

    const input = inputRef.current;
    const inputValue = input.value;
    if (!/\S/.test(inputValue)) {
      return;
    }
    props.onAdd(inputValue);

    inputRef.current.value = '';
    input.focus();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-form-input"
        placeholder="Enter your habit..."
      />
      <button className="add-form-btn">Add</button>
    </form>
  );
});

export default AddForm;
