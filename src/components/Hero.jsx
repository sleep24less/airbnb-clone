import pictures from '../assets/group.png'

function Hero() {
    return (
        <div className='hero'>
            <img src={pictures} alt='pictures of people on holiday' className='photo_group'></img>
            <h1 className='hero_header'>Online Experiences</h1>
            <p className='hero_para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero