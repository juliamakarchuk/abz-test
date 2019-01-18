import React from 'react';
import { func } from 'prop-types';

import './styles.scss';
import '../../css/styles.scss';

const Baner = ({ hideMenu }) =>{
    return(
        <div className = 'wrapper wrapper-img'>
          <div className = 'baner container' onClick = {()=>hideMenu()}>
             <h1 className = 'baner__title'>
                Lorem ipsum dolor sit amet.
             </h1>
             <p className = 'baner__text' >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat eos quam, molestiae veniam illo beatae soluta nihil blanditiis praesentium.
             <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi laboriosam voluptas beatae qui eveniet magnam dicta minima vero veritatis earum!</span>
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