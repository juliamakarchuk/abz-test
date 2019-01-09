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
                    When real users have a slow experience on mobile, they're much less likely to 
                    find what they are looking for or purchase from you in the future. For many 
                    sites this equates to a huge missed opportunity, especially when more than 
                    half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
                    <p className = 'acquinted__text'>
                    Last week, Google Search and Ads teams announced two new speed initiatives 
                    to help improve user-experience on the web. 
                    </p>
                   <a className = 'acquinted__btn' href = '#registration-block'>Sign Up</a>
                 </div>
             </div>
          </section>
        </div>
    )
}
export default Acquinted;