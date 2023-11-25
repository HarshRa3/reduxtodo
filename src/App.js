import React from 'react'
import Header from './components/Header'
import AddTodoField from './components/AddTodoField'
import { useDispatch, useSelector } from 'react-redux'
import DisplayTodos from './components/DisplayTodos'
import { deleteTodo } from './redux/action'

const App = () => {
  const toggleBtn=useSelector(state=>state.todoReducer.AddTodo)
  // console.log(toggleBtn);
  const list=useSelector(state=>state.todoReducer.list)
  const dispatch=useDispatch()
  return (
    <>
    
    <Header/>
    {toggleBtn && <AddTodoField/>}
    {list.map((e)=>{
      return <DisplayTodos text={e.data} key={e.id} handleDelete={()=>dispatch(deleteTodo(e.id))} />
    })}
    
    </>
  )
}

export default App
