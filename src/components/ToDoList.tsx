import React from 'react'
import { type ToDo } from '../models/toDo'
import Todo from './Todo'
import './styles.css'

interface Props {
    toDos: ToDo[],
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}
const ToDoList: React.FC<Props> = ({toDos, setToDos}) => {
  return (
    <div className='todos'>
      {toDos.map(t=>(
        <Todo 
        todo={t}
        key={t.id}
        toDos={toDos}
        setToDos={setToDos}
        />))}
    </div>
  )
}

export default ToDoList
