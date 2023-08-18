import {useState,useEffect} from 'react'
import './App.css';
import { getTodos, postTodos, putTodo, deleteTodo } from './actions/todos'



function App() {
  const [todos,setTodos]=useState([])
  const [todo,setTodo]=useState("")

  useEffect(()=>{
    getData()
    
  },[])

//this 'res' is from the getTodos(),so the 'res.data'in file ==='res' in here 
  const getData=()=>{
    getTodos().then(res => {
      setTodos(res)
    })
  }
//this 'getData()'means the end-side server is updated,so we need recall getData()
//function to update the 'todo' state
  const addTodo=()=>{
    postTodos(todo).then(() => {
      getData()
    })
  }

  const handleChange=(todo)=>{
    const changedItem={...todo,isDone:true}
    
    putTodo(changedItem).then(res=>{
      //console.log(res)
      getData()
    })

  }
  const handleDelete=(id)=>{
    deleteTodo(id).then(()=>{
      getData()
    })
  }
  
  return (
    <div className="App">
      
      <input value={todo} onChange={e=>setTodo(e.target.value)}/>
      <button onClick={addTodo} >Submit</button>
      {todos.map((item,index)=>(
        <div key={index}>
          <span className={item.isDone ? 'done' : ''}>{item.description}</span>
          <span>
            {item.isDone ? <button onClick={() => handleDelete(item.id)}>Delete</button> : <button onClick={() => handleChange(item)}>Complete</button>}
          </span>

        </div>

      )

      )}
      
    </div>
  );
}

export default App;
