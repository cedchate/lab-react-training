import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import dice0 from '../assets/images/dice-empty.png'
import { useState } from 'react'

function Dice (props) {
    const dice= [dice0, dice1, dice2, dice3, dice4, dice5, dice6];
    const start= Math.floor(Math.random()*5+1);
    const [startUrl, setUrl]= useState(dice[start]);
    // const startUrl= dice[start];
    const rollDice= ()=> {
        setUrl(dice0);
        setTimeout(()=> {
            const then= Math.floor(Math.random()*5+1);
            setUrl(dice[then]);
        }, 1000)
    }
    return (
    <>
        <picture className='dicePic'>
            <img onClick={rollDice} src={startUrl} className='diceImg' alt='Dice' />
        </picture>
    </>
    );
}

export default Dice