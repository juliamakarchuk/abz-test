import React from 'react';

import './styles.scss';

import  facebookIcon from '../../../icons/facebook.svg';
import  linkedinIcon from '../../../icons/linkedin.svg';
import  instagramIcon from '../../../icons/instagram.svg';
import  twitterIcon from '../../../icons/twitter.svg';
import  pinterestIcon from '../../../icons/pinterest.svg';


const SocialsBar = () =>{
  return(
    <div className = 'footer-socials'>
      <div className = 'socials-bar'>
      <a href="#" className = 'socials-bar__link'>
         <svg>
           <use xlinkHref = {`${facebookIcon}#root`}/>
         </svg>
      </a>
      <a href="#" className = 'socials-bar__link'>
         <svg>
           <use xlinkHref = {`${linkedinIcon}#root`}/>
         </svg>
      </a>
      <a href="#" className = 'socials-bar__link'>
         <svg>
           <use xlinkHref = {`${instagramIcon}#root`}/>
         </svg>
      </a>
      <a href="#" className = 'socials-bar__link'>
         <svg>
           <use xlinkHref = {`${twitterIcon}#root`}/>
         </svg>
      </a>
      <a href="#" className = 'socials-bar__link'>
         <svg>
           <use xlinkHref = {`${pinterestIcon}#root`}/>
         </svg>
      </a>
 </div>
 <p classNames = 'footer__rights-text'>&copy; abz.agency specially for the test task</p>
 </div>
  )
}
export default SocialsBar;