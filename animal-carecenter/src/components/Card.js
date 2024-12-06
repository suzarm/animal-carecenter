import './Card.css'

function Card({img,text,button,style}){
    return(
        < div className='card' style={style}>
            <img className='card-img' alt='img' src={img}/>
            <p className='card-text'>{text}</p>
            <button className='card-btn'>{button}</button>
          
        </div>
    )
}

export default Card;