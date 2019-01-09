import React from 'react';

import logo from '../../../images/logo2.png';
import './styles.scss';


const FooterNav = () => {
    return(
        <div className = 'footer__container'>
             <div className= 'footer__logo-container'>
                <a href="#">
                    <img src = { logo } alt="company logo: abz agency" className = 'footer__logo'/>
                </a>
             </div>
             <ul className = 'footer__menu'>
                <li>
                    <a href="#acquinted-block">About me </a>
                </li>
                <li>
                    <a href="#technologies-block">Relationships</a>
                </li>
                <li>
                    <a href="#requirements-block">Requirements</a>
                </li>
                <li>
                    <a href="#users-block">Users</a>
                </li>
                <li>
                    <a href="#registration-block">Sign Up</a>
                </li>
             </ul>
        </div>
    )
}

export default FooterNav;