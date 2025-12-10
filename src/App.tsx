import { useRef, useState, type FormEvent } from 'react'
import './App.css'
import InputField from './components/InputField'
import type { ToDo } from './models/toDo';
import ToDoList from './components/ToDoList';
const App: React.FC = ()=> {//React Functonal component type(ctrl + space-view other types)
const [toDo, setToDo] = useState<string>("")//define the type if the initial state in angular braces
const [toDos, setToDos] = useState<ToDo[]>([]);

const handleAdd = (e: FormEvent) => {
  e.preventDefault();

  if(toDo)//if toDo is truthy then this statement is executed, meaning when it is empty/null/falsy it is not executed
    setToDos([...toDos, {id: Date.now(), toDo, isCompleted: false}]);
    setToDo("");
    console.log(toDos)
}

  return (
 <div className='App'>
  <span className="heading">Taskify</span>
  <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
  <ToDoList toDos={toDos} setToDos={setToDos}/>
 </div>
  )
}

export default App










