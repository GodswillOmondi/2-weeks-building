import React from 'react';
import { useState } from 'react';
import InputField from '../components/InputField';
import ToDoList from '../components/ToDoList';
import type { ToDo } from '../models/toDo';


const handleAdd = (e) => {
    e.preventDefault();

    if(toDo)
        setToDos([...toDos, {id: Date.now(), toDo, isCompleted: false}]);
        setToDo("");
        console.log(toDos);

}


const ToDoListPage: React.FC = () => {

const [toDo, setToDo] = useState<string>("");
const [toDos, setToDos] = useState<ToDo[]>([]);

  return (
    <div className="App">
       <span className="heading">Taskify</span>
  <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
  <ToDoList toDos={toDos} setToDos={setToDos}/>
    </div>
  )
}

export default ToDoListPage
