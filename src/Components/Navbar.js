import './Navbarstyles.css';

import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {FaBars,FaTimes,FaHome} from 'react-icons/fa';

const Navbar = () => {
   const[click,setClick]=useState(false);
   const handleClick= ()=>setClick(!click);

  return (
    <div className='header'>

      <div className='icon'>
         <Link to='/'>
            <FaHome size={25} style={{color:'rgb(231, 230, 230)'}}/>
          </Link>
      </div>

      <ul className=  {click ? 'nav-menu active' : 'nav-menu'}>
         <li>
            <Link to='/Academics'>Academics</Link>
         </li>

         <li>
            <Link to='/Skills'>Skills</Link>
         </li>

         <li>
            <Link to='/Projects'>Projects</Link>
         </li>
      </ul>

      <div className='hamburger' onClick={handleClick}>
         {click ? ( <FaTimes size={25} style={{color: 'rgb(231, 230, 230)'}} />) : ( <FaBars size={25} style={{color:'rgb(231, 230, 230)'}} />)}
      </div>

    </div>
  )
}

export default Navbar