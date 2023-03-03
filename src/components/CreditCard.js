import visa from '../assets/images/visa.png'

function CreditCard(props) {
    let logo;
    if(props.type==='Visa'){
        logo= visa;
    }else {
        logo= '/master-card.svg';
    }
    let month;
    if(props.expirationMonth<10){
        month= '0'+props.expirationMonth;
    }else {
        month= props.expirationMonth;
    }
    let slice= props.number.slice(-4);
    let number='**** **** **** '+slice;
    return (
        <div className="creditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
            <div className="logoCC">
                <picture>
                    <img src={logo} alt={props.type}/>
                </picture>
            </div>
            <div className="numberCC">
                {number}
            </div>
            <div className="infoCC">
                <div>Expires {month}/{props.expirationYear} <span>{props.bank}</span></div>
                <div className='nameCC'>{props.owner}</div>
            </div>
        </div>
    )
}

export default CreditCard