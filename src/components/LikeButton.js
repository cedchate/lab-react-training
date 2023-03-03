import { useState } from "react";
let i=0;
function LikeButton() {
    const [count, setCount]= useState(0);
    const color= ['purple','blue','green','yellow','orange','red'];
    // console.log(count)
    const Increase=()=>{
        if(i<color.length-1){
            i++;
        }else {
            i=0;
        }
        setCount(count+1);
    }
    return (
        <button onClick={Increase} style={{backgroundColor: color[i], width: '7rem', margin: '1rem'}}>{count} Like{(count>=2)? 's': ''}</button>
    );
}

export default LikeButton