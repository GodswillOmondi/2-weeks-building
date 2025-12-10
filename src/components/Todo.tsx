import React from 'react'
import type { ToDo } from '../models/toDo'
import { AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'

interface Props {
    todo: ToDo,
    toDos: ToDo[],
    key: number,
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const Todo: React.FC<Props> = ({todo, setToDos, key, toDos}) => {
    const handleDone = (id: number) => {
    setToDos(toDos.map((todo)=> todo.id === id ? {...todo, isDone: true} : todo))

}
  return (
    <form action="" className='todos__single'>
            {
                todo.isCompleted ?
               (<s className="todos__single--text">{todo.toDo}</s>):
                (<span className="todos__single--text">{todo.toDo}</span>)
            }
           <div>
                <span className="icon">
                    <AiFillEdit/>
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
    </form>
  )
}

export default Todo
