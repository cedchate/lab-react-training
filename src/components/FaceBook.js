import profiles from '../data/berlin.json';
import { useState } from 'react';

function FaceBook(props) {
    const countryArr= ['All'];
    profiles.forEach((one)=> {
        if(!countryArr.includes(one.country)){
            countryArr.push(one.country)
        }
    });
    const [selected, setSelected] = useState('');
    const changeBackground=(country)=>{
        setSelected(country);
    }
    const Selection= (country)=> {
        if(selected==='All'){
            return "#1a58dd"
        }
        return selected===country? "#1a58dd": "#282c34"
    }
    const SelectionFace= (one) => {
        if(selected==='All'){
            return "#1a58dd"
        }
        return selected===one.country? '#1a58dd': "#282c34"
    }
    return(
        <>
        <div>
            {countryArr.map((one)=> {
                {/* console.log(Selection(one)) */}
                return (
                    <button style={{backgroundColor: Selection(one)}} onClick={()=>changeBackground(one)}>{one}</button>
                );
            })}
        </div>
        {profiles.map((one) => {
           return ( 
            <div className='IdCard' style={{backgroundColor: SelectionFace(one)}}>
                <picture>
                    <img src={one.img} alt={one.firstName}/>
                </picture>
                <div>
                    <p><strong>First name:</strong> {one.firstName}</p>
                    <p><strong>Lasr name:</strong> {one.lastName}</p>
                    <p><strong>Country:</strong> {one.country}</p>
                    <p><strong>Height:</strong> {(one.isStudent==='false')? 'Teacher' : 'Student' }</p>
                </div>
            </div>
           );
            })
        }
        </>
    );
}

export default FaceBook