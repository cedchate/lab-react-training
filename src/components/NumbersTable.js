function NumbersTable(props) {
    let arr=[];
    for(let i=0; i<props.limit; i++) {
        arr.push(i+1);
    }
    const oddOrEven= (i) => {
        return (i%2===0)? 'red': 'white';
    }
    const evenOrOdd= (i) => {
        return (i%2===0)? 'white': 'red';
    }
    return (
        <>
            <div style={{display: 'flex', flexWrap: 'wrap', margin: '1rem'}}>
                {arr.map((el, i) => {
                    return <div style={{border: '2px solid black',display: 'flex', alignItems: 'center',justifyContent: 'center' ,width: '5rem',height:'5rem',color: evenOrOdd(el), backgroundColor: oddOrEven(el)}}>{el}</div>
                })}
            </div>
        </>
    );
}

export default NumbersTable