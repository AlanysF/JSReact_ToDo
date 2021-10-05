import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList() {
    const [ToDos, setToDos] = useState([]);

    const addToDo = ToDo => {
        if (!ToDo.text || /^\s*$/.test(ToDo.text)) {
            return;
        }

        const newToDos = [ToDo, ...ToDos];

        setToDos(newToDos);
        console.log(...ToDos);
    };

    const updateToDo = (ToDoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setToDos(prev => prev.map(item => (item.id === ToDoId ? newValue : item)));
    };

    const removeToDo = id => {
        const removedArr = [...ToDos].filter(ToDo => ToDo.id !== id);

        setToDos(removedArr);
    };

    const completeToDo = id => {
        let updatedToDos = ToDos.map(ToDo => {
            if(ToDo.id === id) {
                ToDo.isComplete = !ToDo.isComplete;       
            }
            return ToDo;
        });
        setToDos(updatedToDos);
    };

    return (
        <>
          <h1>Quais os planos para hoje?</h1>
          <ToDoForm onSubmit={addToDo} />
          <ToDo
            ToDos={ToDos}
            completeToDo={completeToDo}
            removeToDo={removeToDo}
            updateToDo={updateToDo}
          />
        </>
      );
};

export default ToDoList;