import React from 'react';

import './styles.scss';


const HeaderMenu = () => {
    return (
        <div className = 'header__container'>
             <ul className = 'header__menu'>
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
export default HeaderMenu;