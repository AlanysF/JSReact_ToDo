import React, { useState, useRef, useEffect } from 'react';

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
    });
    setInput('');
};

return (
  <form onSubmit={handleSubmit} className='ToDo-form'>
    {props.edit ? (
      <>
        <input
          placeholder='Update your item'
          value={input}
          onChange={handleChange}
          name='text'
          ref={inputRef}
          className='ToDo-input edit'
        />
        <button onClick={handleSubmit} className='ToDo-button edit'>
          Update
        </button>
      </>
    ) : (
      <>
        <input
          placeholder='Adicione uma tarefa'
          value={input}
          onChange={handleChange}
          name='text'
          className='ToDo-input'
          ref={inputRef}
        />
        <button onClick={handleSubmit} className='ToDo-button'>
          Adicione
        </button>
      </>
    )}
  </form>
);
}

export default ToDoForm;