import { useState } from "react";
function ClickablePicture(props) {
    const [picture, setPicture]= useState(props.img);
    const Lunette= () => {
        if(picture===props.img){
            setPicture(props.imgClicked);
        }else {
            setPicture(props.img)
        }
    }
    return(
        <>
        <img onClick={Lunette} src={picture} alt='alt'/>
        </>
    );
}

export default ClickablePicture