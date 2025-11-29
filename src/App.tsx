import { useState, type FormEvent } from 'react'
import './App.css'
import InputField from './components/InputField'
import type { toDo } from './models/toDo'
const App: React.FC = ()=> {//React Functonal component type(ctrl + space-view other types)
const [toDo, setToDo] = useState<string>("")//define the type if the initial state in angular braces
const [toDos, setToDos] = useState<toDo[]>([]);

const handleAdd = (e: FormEvent) => {
  e.preventDefault();

  if(toDo)
    setToDos([...toDos, {id: Date.now(), toDo, isCompleted: false}])
    setToDo("")
    console.log(toDos)
}

  return (
 <div className='App'>
  <span className="heading">Taskify</span>
  <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
 </div>
  )
}

export default App










