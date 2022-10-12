import cardImg from '../assets/card-img.png'
import star from '../assets/star.png'
import './Card.css'

function Card() {
    return (
        <div className='card'>
            <div className='status'>SOLD OUT</div>
            <img src={cardImg} alt='picture of a person' className='card_img'></img>
            <div className='rating_container'>
                <img src={star} alt='rating star image' className='star_img'></img>
                <p className='rating'><b>5.0</b></p>
                <p className='rating_num'>(6)&bull;USA</p>
            </div>
            <p className='card_text'>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}

export default Card