const Hello = (props) => {
    return (
        <div>
            <p>{props.greeting} from Hello Component</p>
            <p>PS the password is {props.password}</p>
            <button onClick={() => props.setMessage("I'm inside the Hello Component")}>Change the message</button>
        </div>
    )
}

export default Hello