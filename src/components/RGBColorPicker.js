import SingleColorPicker from "./SingleColorPicker";
import { useState } from "react";

function RGBColorPicker (props) {
    const [rValue, setRValue] = useState(props.rValue);
    const [gValue, setGValue] = useState(props.gValue);
    const [bValue, setBValue] = useState(props.bValue);

    return (
        <>
            <SingleColorPicker 
            color="r"
            value={rValue}
            onChange={ (event) => {setRValue(event.target.value)}  }
            />

            <SingleColorPicker 
            color="g"
            value={gValue}
            onChange={ (event) => {setGValue(event.target.value)}  }
            />

            <SingleColorPicker 
            color="b"
            value={bValue}
            onChange={ (event) => {setBValue(event.target.value)}  }
            />
            <div style={{display:'flex'}}>
            <div style= {{backgroundColor:`rgb(${rValue},${gValue},${bValue})`, width: '4rem', height:'4rem'}}></div>
            <p>rgb({rValue},{gValue},{bValue})</p>
            </div>
        </>
    );
}

export default RGBColorPicker