function Random(props){
    return (
        <p className="greetings">Random value between {props.min} and {props.max} &gt; {Math.floor(props.min+props.max*Math.random())}</p>
    );
}

export default Random