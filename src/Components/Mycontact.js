import React from 'react'
import './Mycontactstyles.css';
import {Link} from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa';

const Mycontact = () => {
  return (
    <div>
        <div className='contacts-container'>
    
    <div className='mycontacts-container'>
      <div className='contactcard-container'>
        <div className='contact-content'>
            <ul className='sample'>
              <li>
              <Link to='/'>
            <FaFacebook size={28} style={{color: 'blue'}}/>
              </Link>
              </li>
              <li>
              <Link to='/'>
            <FaFacebook size={28} style={{color: 'blue'}}/>
              </Link>
              </li>
              <li>
              <Link to='/'>
            <FaFacebook size={28} style={{color: 'blue'}}/>
              </Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
 </div>
    </div>
  )
}

export default Mycontact