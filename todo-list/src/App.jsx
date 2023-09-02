// import { useState } from "react";
// import TodoItem from "./components/TodoItem";

// function App() {
//   const [todos, setTodos] = useState([
//     "Learn about React",
//     "Meet a friend for lunch",
//     "Build a really cool todo app"

//   ])
//   return (
//     <>
//       <h1>My todo list</h1>;
//       {/* <TodoItem 
//         text = "Buy your mentor a donut"
//         reminder = "He likes cinnaamon"
//         />

//       <TodoItem text= "Express confusion" /> */}
//     {todos.map(todo) => {
//       return <TodoItem text= {todo}/>
//     }}
//     </> 
//   )

// }
  



import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from './components/TodoForm";


function App() {
	const [todos, setTodos] = useState([
		"Learn About React",
		"meet a friend for lunch",
		"Build a really cool todo app",
		"Learn About React",
		"meet a friend for lunch",
		"Eat 16 fish"
	]);

	const addTodo = (text) => {
		const newTodos = (...todos, text);
		setTodos(newTodos)
	}

	return (
		<>
			<h1>My Todo List</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map(todo, index) => (
				
				<TodoItem text={todo} key= {index} />);
			})}
		</>
}

export default App;