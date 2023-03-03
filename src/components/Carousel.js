import { useState } from "react";

function Carousel(props) {
    const [i, setI]= useState(0);
    const decrement=() => {
        if(i===0){
            setI(props.images.length-1)
        }else {
            setI(i-1)
        }
    }
    const increment=() => {
        if(i<props.images.length-1){
            setI(i+1);
        }else {
            setI(0);
        }
    }
    return (
        <>
        <div style={{display: 'flex'}}>
            <button onClick={decrement}>Left</button>
            <img src={props.images[i]} alt='pic' />
            <button onClick={increment}>Right</button>
        </div>
        </>
    );

}

export default Carousel