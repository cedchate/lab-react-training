import Rating from "./Rating";
function DriverCard(props){
    return (
        <div className="driverCard">
            <picture>
                <img src={props.img} alt={props.name}/>
            </picture>
            <div className="driverInfo">
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard