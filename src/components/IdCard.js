function IdCard(props) {
    // console.log(props)
    return (
        <div className="IdCard">
        <picture>
            <img src={props.picture} alt={props.firstName}/>
        </picture>
        <div>
        <p><strong>First name:</strong> {props.firstName}</p>
        <p><strong>Lasr name:</strong> {props.lastName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height}</p>
        <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
        </div>
        </div>
    );
}

export default IdCard