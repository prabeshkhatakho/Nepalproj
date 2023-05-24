import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "./navbar.css"
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'


const Navbar=()=> {

    const [Mobile, setMobile] = useState(false)


    return (
        <>
            <nav className='navbar'>
                 
                <h3 className='logo'> Nepal </h3>
                    <ul className={Mobile? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)} >
                        <Link to='/home'>
                            <li>home</li></Link>
                        <Link to='/Services'>
                            <li>Services</li></Link>
                        <Link to='/Resources'>
                            <li>Resources</li></Link>
                        <Link to='/Contact'>
                            <li>Contact</li></Link>
                        <Link to='/Login'>
                            <li>Login</li></Link>
                    </ul>

    <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile) }>
        {Mobile? <ImCross/> : <FaBars />}</button>
        
    

                    
            </nav>
        </>
     
        
    )
}



export default Navbar;