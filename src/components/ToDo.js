import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ToDo = ({ ToDos, completeToDo, removeToDo, updateToDo}) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });

    const submitUpdate = value => {
        updateToDo(edit.id, value);
        setEdit({
            id:null,
            value:''
        });
    };

    if(edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return ToDos.map((ToDo, index) => (
        <div
      className={ToDo.isComplete ? 'ToDo-row complete' : 'ToDo-row'}
      key={index}
    >
      <div key={ToDo.id} onClick={() => completeToDo(ToDo.id)}>
        {ToDo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeToDo(ToDo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: ToDo.id, value: ToDo.text })}
          className='edit-icon'
        />
      </div>
    </div>
));
}

export default ToDo;
