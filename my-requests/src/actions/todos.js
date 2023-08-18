//this file is to get data from the backend server
import axios from 'axios'

const baseUrl='http://localhost:30001';
const todosUrl=baseUrl+'/todos';
//getTodos()returns an array=='res.data'
export const getTodos=()=>{
    return axios.get(todosUrl)
                .then(res=>res.data)
               
}

export const postTodos = (description) => {
    const newItem={
        description:description,
        isDone:false
    }
    return axios.post(todosUrl,newItem)
        .then(res => console.log(res.data))

}

export const putTodo=(todo)=>{
    return axios.put(`${todosUrl}/${todo.id}`,todo)
        
}
export const deleteTodo=(id)=>{
    return axios.delete(`${todosUrl}/${id}`)
}

