import  { useState } from 'react';
import TodoItem from './assets/components/TodoItem';
import TodoForm from './assets/components/TodoForm';
import './App.css';

function App() {

  const [todos, SetTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    }, {
      text:"Meet a Friend for Lunch",
      isCompleted: false, 
    }, {
      text:"Build a Really Cool Todo App",
      isCompleted: false,
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    SetTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    SetTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1 className='todo-list'>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} />
      )) }
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
