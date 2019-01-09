import React from 'react';
import { func } from 'prop-types';

import './styles.scss';
import '../../css/styles.scss';

const Baner = ({ hideMenu }) =>{
    return(
        <div className = 'wrapper wrapper-img'>
          <div className = 'baner container' onClick = {()=>hideMenu()}>
             <h1 className = 'baner__title'>
                Test assignment for Frontend Developer position
             </h1>
             <p className = 'baner__text' >
             We kindly remind you that your test assignment should be 
             submitted as a link to github/bitbucket repository.
             <span> Please be patient, we consider and respond to every application 
             that meets minimum requirements. We look forward to your submission. Good luck!</span>
             </p>
             <a className = 'baner__btn' href = '#registration-block'>Sign Up</a>
          </div>
        </div>
    )
}

Baner.propTypes = {
    hideMenu: func.isRequired
}

export default Baner;