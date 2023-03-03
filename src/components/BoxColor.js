function BoxColor(props) {
    const color= 'rgb('+props.r+','+props.g+','+props.b+')';
    return (
        <p className="greetings" style={{ backgroundColor: color}}>rgb({props.r},{props.g},{props.b})</p>
    );
}

export default BoxColor