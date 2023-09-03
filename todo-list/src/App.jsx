import  {useState} from 'react';
import TodoItem from './assets/components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, SetTodos] = useState([
    "Learn about React",
    "Meet a friend for lunch",
    "build a relly cool todo app",
  ]);

  return (
    <div>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
        <TodoItem text={todo} key={index} />
      )) }
      <TodoForm />
    </div>
  );
}

export default App;
