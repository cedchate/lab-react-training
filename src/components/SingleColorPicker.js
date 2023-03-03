import { useState } from "react";

function SingleColorPicker (props) {
    const [color, setColor] = useState('rgb(0,0,0)');
    const handleColor=(event) => {
        if(props.color==='r'){
            setColor(`rgb(${event.target.value},0,0)`)
        }else if (props.color==='g'){
            setColor(`rgb(0,${event.target.value},0)`)
        }else {
            setColor(`rgb(0,0,${event.target.value})`)
        }
        props.onChange(event);
    }
    return (
        <div style={{display:'flex'}}>
        <div style= {{backgroundColor: color, width: '4rem', height:'4rem'}}></div>
        <label>{props.color.toUpperCase()}<input type='number' value={props.value} min={'0'} max={255} onChange={handleColor} /></label>
        </div>
    );
}

export default SingleColorPicker