import './Navbar.css';

function Navbar(){
return(
    <div className='navbar'>
        <h1 className='title'>Power Grid Homepage</h1>
        <ul className='navbar-list'>
            <li className='navbar-item'>Home</li>
            <li className='navbar-item'>About</li>
            <li className='navbar-item'>Blog</li>
            <li className='navbar-item'>Careers</li>
            <li className='navbar-item'>Contact Us</li>
        </ul>
    </div>
    )
}

export default Navbar;