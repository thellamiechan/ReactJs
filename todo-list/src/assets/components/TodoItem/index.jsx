// const TodoItem = props => {
//     console.log(props)
//     return 
//         <div>
//             {props.text} {props.reminder}
//         </div>
// };
// export default TodoItem;

const TodoItem = props => {
	return <div>{props.text}</div>;
};

export default TodoItem;


function TodoForm(props) {
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!value) {
			return;
		}
		props.addTodo(value);
		setValue("");
	};

	retun (
		<form>
			<input type="text" placeholder = "Add Todo" />
		</form>
	);
}

export default TodoForm;