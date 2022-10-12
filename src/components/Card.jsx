import star from '../assets/star.png'
import './Card.css'

function Card(props) {
    const image = props.img
    const experience = props.exp
    const price = props.price
    const status = props.status

    return (
        <div className='card'>
            <div className='status'>{status}</div>
            <img src={image} alt='picture of a person' className='card_img'></img>
            <div className='rating_container'>
                <img src={star} alt='rating star image' className='star_img'></img>
                <p className='rating'><b>5.0</b></p>
                <p className='rating_num'>(6)&bull;USA</p>
            </div>
            <p className='card_text'>{experience}</p>
            <p><b>{price}</b> / person</p>
        </div>
    )
}

export default Card