import logo from '../assets/airbnb.svg'

function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logo} alt='airbnb logo' className='logo'></img>
        </nav>
    )
}

export default Navbar