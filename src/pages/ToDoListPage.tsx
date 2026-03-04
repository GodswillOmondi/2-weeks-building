import React from 'react';
import InputField from '../components/InputField';
import ToDoList from '../components/ToDoList';
import type { ToDo } from '../models/toDo';

interface Props {
  toDo: ToDo,
  toDos: ToDo[],
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>,
  setToDo: React.Dispatch<React.SetStateAction<ToDo>>,
  handleAdd: VoidFunction
}

const ToDoListPage: React.FC<Props> = ({toDo, toDos, setToDos, setToDo, handleAdd}) => {


  return (
    <div className="App">
       <span className="heading">Taskify</span>
  <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
  <ToDoList toDos={toDos} setToDos={setToDos}/>
    </div>
  )
}

export default ToDoListPage
