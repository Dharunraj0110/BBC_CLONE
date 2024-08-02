import '../Cards/Cards.css';

const Cards = (props) =>{

    return(
        <div className='Card-main'>

        <img src={props.img} className='propsimg1'/>
        <h3 className='propshead'>{props.tittle}</h3>
        <p className='propspara'>{props.para}</p>
        </div>
    )
}

export default Cards;