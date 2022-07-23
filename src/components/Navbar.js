import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function MenuItem(path, name, onClick, isMobile=false) {
    const className = isMobile ? 'nav-links-mobile' : 'nav-links'
    return (
        <li className='nav-item'>
            <Link to={path} className='nav-links' onClick={onClick}>
                {name}
            </Link>
        </li>
    );
}

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => setButton(window.innerWidth > 960);
    useEffect(showButton, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItem('/', 'Home', {closeMobileMenu})}
                        {MenuItem('/services', 'Services', {closeMobileMenu})}
                        {MenuItem('/products', 'Products', {closeMobileMenu})}
                        {MenuItem('/sign-up', 'Sign Up', {closeMobileMenu}, true)}
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar