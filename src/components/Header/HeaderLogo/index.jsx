import React from 'react';
import { func } from 'prop-types';


import './styles.scss';
import logo from '../../../icons/logo.svg';


const HeaderLogo = ( {toggleMenu, hideMenu} ) => {
    return(
        <div className= 'header__logo-container' onClick = { hideMenu }>
            <a href="#">
                <img src = { logo } alt="company logo: abz agency" className = 'header__logo'/>
            </a>
            <span className = 'menu-span' onClick = { ()=>toggleMenu() }></span>
        </div>
    )
}
HeaderLogo.propTypes = {
    toggleMenu: func.isRequired,
    hideMenu: func.isRequired
}
export default HeaderLogo;

