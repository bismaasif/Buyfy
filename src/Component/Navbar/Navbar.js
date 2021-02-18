import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar=()=>{
    return(
        <>
        <div className="Navbar">
        <div>
            <Link to="/">
            <h1>logo</h1> 
            </Link>
        
        </div>
       
        <div className="navitemcontainer">
            <div className="navitem">
                <Link to="/Category">
                <h4 >categories</h4>
                </Link>
                </div>
            <div className="navitem">
                <Link to="/authentication">
               
                <h4>authentication</h4>
                </Link>
                </div>
            
        </div>
        
        </div>
        
       
        </>
    )
}
export default Navbar;