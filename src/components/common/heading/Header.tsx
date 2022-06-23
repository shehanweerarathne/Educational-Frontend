import React, { useState }  from 'react';
import {Router,Link} from "react-router-dom";
import Head from "./Head";
import './Header.css'


const Header = () => {
    const [click, setClick] = useState(false)
    return (
        <>
            <Head/>
            <header>
                <nav className='flexSB'>
                <ul className={ click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>Courses</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/'}>Team</Link></li>
                    <li><Link to={'/'}>Pricing</Link></li>
                </ul>
                    <div className='start'>
                        <div className='button'>JOIN US</div>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Header;
