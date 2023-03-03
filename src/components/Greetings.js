function Greetings(props){
    let hi='Hello';
    if(props.lang==='de'){
        hi='Hallo'
    }else if(props.lang==='fr'){
        hi='Bonjour'
    }else if(props.lang==='es'){
        hi='Holla'
    }
    return (
        <p className="greetings">{hi} {props.children}</p>
    );
}

export default Greetings