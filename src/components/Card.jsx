import star from '../assets/star.png'
import './Card.css'

function Card(props) {

    return (
        <div className='card'>
            <div className='status'>{props.status}</div>
            <img src={`../public/${props.img}`} alt='picture of a person' className='card_img'></img>
            <div className='rating_container'>
                <img src={star} alt='rating star image' className='star_img'></img>
                <p className='rating'><b>{props.rating}</b></p>
                <p className='rating_num'>({props.count}) &bull; {props.country}</p>
            </div>
            <p className='card_text'>{props.exp}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}

export default Card