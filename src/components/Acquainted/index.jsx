import React  from 'react';

import './styles.scss';
import image from '../../images/Layer_8.png';
import imageRetina from '../../images/Layer_8@2x.png'


const Acquinted = () =>{
    return(
        <div className = 'wrapper'>
          <section className = 'acquinted-block container' id = 'acquinted-block'>
             <h2 className = 'acquinted__title'>Let's get acquainted</h2>
             <div className = 'acquinted__context'>
                 <div className = 'acquinted__image-block'>
                    <picture>
                      <source srcSet= {`${image}, ${imageRetina} 2x`} />
                      <img srcSet = {image} alt="default"/>
                    </picture>
                 </div>
                 <div className = 'acquinted__about'>
                   <h3 className = 'acquinted__subtitle'>I am cool frontend developer</h3>
                   <p className = 'acquinted__text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus odio quaerat praesentium quis sint iste. Eveniet doloremque deserunt explicabo assumenda. Repudiandae magnam non illum deserunt debitis?</p>
                    <p className = 'acquinted__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque minus iste nemo minima quos odit impedit possimus, provident accusantium! Ipsa ipsum magnam quisquam impedit voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, corporis.
                    </p>
                   <a className = 'acquinted__btn' href = '#registration-block'>Sign Up</a>
                 </div>
             </div>
          </section>
        </div>
    )
}
export default Acquinted;