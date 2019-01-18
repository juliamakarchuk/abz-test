import React from 'react';
import { func } from 'prop-types';


import './styles.scss';
import logo from '../../../images/mountain.svg';


const HeaderLogo = ( {toggleMenu, hideMenu} ) => {
    return(
        <div className= 'header__logo-container' onClick = { hideMenu }>
            <a href="#" className = 'header__logo'>
              ICON
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

