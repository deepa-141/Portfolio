import './HeroImgstyles.css';

import React from 'react';
import {Link, Route} from 'react-router-dom';
import {FaLinkedin,FaFacebookSquare,FaGithubSquare} from 'react-icons/fa';
import {Nav} from 'react-bootstrap'
//import IntroImg from '../assets/Project2.jpg';

const HeroImg = () => {

  return (
    <div className='hero' >
        <div className='mask'>
           <img className='intro-img' src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  alt='IntroImg' />
        </div>
        <div className='content'>
           <h1>Welcome to myPortfolio!</h1>
           <p>I am currently a final year student at NIT Jamshedpur and enthusiastic to become a software developer. This is my first ever attempt of developing a website from scratch.</p>
           <ul className='contact-icons'>
            <li>
            <Nav.Link href="https://www.linkedin.com/in/sai-deepa-anthati-9b8789215">
                <FaLinkedin size={25} style={{color: 'rgb(231, 230, 230)'}}></FaLinkedin>
              </Nav.Link>
            </li>
          
            <li>
            <Nav.Link href="https://www.facebook.com/sai.deepa.56">
                <FaFacebookSquare size={25} style={{color: 'rgb(231, 230, 230)'}}></FaFacebookSquare>
              </Nav.Link>
            </li>
            
            <li>
              <Nav.Link href="https://github.com/Deepa1401">
                <FaGithubSquare size={25} style={{color: 'rgb(231, 230, 230)'}}></FaGithubSquare>
              </Nav.Link>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default HeroImg;