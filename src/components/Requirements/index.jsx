import React from 'react';

import './styles.scss';
import image from '../../images/Layer_9.png';
import imageRetina  from '../../images/Layer_9@2x.png';

const  Requirements = () => {
    return (
        <div className= 'wrapper wrapper--requirements'>
          <section className = 'requirements-block container' id = 'requirements-block'>
               <h2 className = 'requirements__title'>General requirements for the test task</h2>
               <div className = 'requirements__content'>
               <div className = 'requirements__right-block'>
                  <picture>
                      <source srcSet= {`${image}, ${imageRetina} 2x`} />
                      <img srcSet = {image} alt="default"/>
                    </picture>
                 </div>
                 <div className = 'requirements__left-block'>
                 <p className = 'requirements__text'>
                 Users want to find answers to their questions quickly and data shows that people 
                 really care about how quickly their pages load. The Search team announced speed 
                 would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), 
                 page speed will be a ranking factor for mobile searches too.
                 </p>
                 <p className = 'requirements__text'>
                 If you're a developer working on a site, now is a good time to evaluate your performance 
                 using our speed tools. Think about how performance affects the user experience of your pages 
                 and consider measuring a variety of real-world user-centric performance metrics.
                 </p>
                 <p className = 'requirements__text'>
                 Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most 
                 significant contributors to the page weight that affect page load time based on data from 
                 HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics 
                 as experienced by Chrome users under real-world conditions.
                 </p>
                 </div>
               </div>
          </section>
        </div>
    )
}
  
export default Requirements;