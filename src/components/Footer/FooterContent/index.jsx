import React from 'react';


import './styles.scss';
import mailIcon from '../../../icons/close-envelope.svg';
import phoneIcon from '../../../icons/telephone-handle-silhouette.svg'
import mobileIcon from '../../../icons/smartphone-call.svg';


const FooterContent = () => {
    return(
        <div className = 'footer-content'>
            <ul className = 'footer-contacts'>
               <li className = 'footer-contacts__item'>
                   <i className = 'mail-icon'>
                      <svg>
                        <use xlinkHref = {`${mailIcon}#root`}/>
                      </svg>
                   </i>
                   <a href="juliamakarchuk366@gmail.com">juliamakarchuk366@gmail.com</a>
               </li>
               <li className = 'footer-contacts__item'>
                   <i className = 'phone-icon'>
                   <svg>
                        <use xlinkHref ={`${phoneIcon}#root`}/>
                    </svg>
                   </i>
                   <a href="+38 093 427 80 45">+38 (093) 427 80 45 </a>
               </li>
               <li className = 'footer-contacts__item'>
                   <i className = 'mobile-icon'>
                   <svg>
                        <use xlinkHref ={`${mobileIcon}#root`}/>
                    </svg>
                   </i>
                   <a href="+38 (093) 427 80 45">+38 (093) 427 80 45</a>
               </li>
            </ul>
            <ul className = 'footer-content__nav'>
               <li className = 'footer-content__item'><a href="">About</a></li>
               <li className = 'footer-content__item'><a href="">Blog</a></li>
               <li className = 'footer-content__item'><a href="">Partners</a></li>
               <li className = 'footer-content__item'><a href="">Shop</a></li>
               <li className = 'footer-content__item'><a href="">Overview</a></li>
               <li className = 'footer-content__item'><a href="">Design</a></li>
               <li className = 'footer-content__item'><a href="">About</a></li>
               <li className = 'footer-content__item'><a href="">Collaborate</a></li>
               <li className = 'footer-content__item'><a href="">Tutorials</a></li>
               <li className = 'footer-content__item'><a href="">Resources</a></li>
               <li className = 'footer-content__item'><a href="">Guides</a></li>
               <li className = 'footer-content__item'><a href="">Examples</a></li>
               <li className = 'footer-content__item'><a href="">Lorem</a></li>
               <li className = 'footer-content__item'><a href="">Terms</a></li>
               <li className = 'footer-content__item'><a href="">Conditions</a></li>
               <li className = 'footer-content__item'><a href="">Help</a></li>
            </ul>
       </div>
 )
}

export default FooterContent;