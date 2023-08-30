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

function App() {
	const [todos, setTodos] = useState([
		"Learn About React",
		"meet a friend for lunch",
		"Build a really cool todo app",
		"Learn About React",
		"meet a friend for lunch",
		"Eat 16 fish"
	]);
	return (
		<>
			<h1>My Todo List</h1>
			{todos.map(todo => {
				return <TodoItem text={todo} />;
			})}
		</>
	);
}

export default App;