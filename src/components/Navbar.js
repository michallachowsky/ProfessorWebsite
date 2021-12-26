import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">Michal Lachowski  <i class="fas fa-laptop-code"></i> </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AboutMe'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About me
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Course'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Course
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            
          </ul>
            </nav>
            
        </>
    )
}

export default Navbar
