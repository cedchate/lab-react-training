function Rating(props){
    // console.log(props.children)
    const isBetter= (i)=> {
        if(props.children>=i-.5){
            return 'fa fa-star checked'
        }else {
            return "fa fa-star"
        }
    }
    return (
        <div>
            <span className={isBetter(1)}></span>
            <span className={isBetter(2)}></span>
            <span className={isBetter(3)}></span>
            <span className={isBetter(4)}></span>
            <span className={isBetter(5)}></span>
        </div>
    );
}
export default Rating