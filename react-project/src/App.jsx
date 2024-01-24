import { useState } from 'react';
import './App.css'
import Todoitem from "./components/Todoitem";
import TodoInput from './components/TodoInput';

function App() {
  var [todoItems, setTodoItems] = useState(['Buy eggs','Hit the gym','Take a shower']);
  var [completedItems, setCompletedItems] = useState([]);

function addTodo(todoItem){
  setTodoItems([...todoItems,todoItem])
}

function deleteTodo(todoItem){
  setTodoItems(todoItems.filter(e => e!= todoItem))
}

function completeTodo(todoItem){
  setTodoItems(todoItems.filter(e => e!= todoItem))
  setCompletedItems([...completedItems,todoItem])
}

  return (
    <div className="App">
      <h1 className='title'>To-Do List</h1>
      <div>
        <TodoInput onAddItem={addTodo} />
      </div>
     <div>
      <div className='list-block'><h2 className='title'>Todo</h2></div>
      <hr />
      {
        todoItems.map(todo => <Todoitem key={todo} title={todo} onDelete={deleteTodo} onComplete={completeTodo} />)
      }
      </div>
     <div className='list-block'><h2 className='title'>Completed</h2></div>
     <hr />
     {
        completedItems.map(todo => <Todoitem key={todo} title={todo} onDelete={deleteTodo} isCompleted />)
      }
    </div>
  )
}

export default App
