
const Greeting = (props) => {
    console.log(props);
    const ageSent = `aged ${props.age}`;
    return <p>Hi {props.name} {ageSent}.</p>
}

export default Greeting;