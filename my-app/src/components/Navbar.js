import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "./navbar.css"
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'


const Navbar = () => {

    const[mobile, setMobile] = useState(false)
    


    return (
        <>
            <nav className='navbar'>
                
                 
                    <h3 className='logo'> Nepal </h3>
                        <ul className={mobile? "nav-links-mobile" : "nav-links"} onclick={()=>setMobile(false)}>
                            <Link to='/home'>
                                <li>home</li></Link>
                            
                            <Link to='/ContactPage/'>
                                <li>Contact</li></Link>
                            
                        </ul>
                        <button className='mobile-menu-icon' onClick={()=> setMobile(!mobile)}>
                            {mobile? <ImCross/>:<FaBars/>}</button>

   
        
    

                     
            </nav>
        </>
     
        
    )
}



export default Navbar;