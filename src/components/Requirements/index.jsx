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
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores est distinctio animi molestias nostrum vero nemo. Nisi consectetur quod, tempora architecto aut, nobis eos in aspernatur laudantium recusandae natus?
                 </p>
                 <p className = 'requirements__text'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem saepe deleniti accusamus exercitationem accusantium rerum. Dignissimos, ducimus enim, nulla magnam aliquam numquam optio quaerat eos illum minima amet rerum obcaecati! Consectetur, consequuntur a! Voluptas dolorum consequuntur, est assumenda inventore consequatur soluta iure debitis quasi magni error. Aperiam, minima expedita?
                 </p>
                 <p className = 'requirements__text'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, optio perferendis. Eum odio soluta unde voluptatem facere voluptate at, accusamus ipsum fugiat? Quisquam sequi tenetur iusto porro iste non. Aliquid cum magni tenetur reprehenderit, dicta fugit, non libero illum nemo molestiae nisi harum. Ut nihil laborum provident mollitia id impedit commodi modi sed. Tempora consequatur sed quia suscipit aliquam voluptate.
                 </p>
                 </div>
               </div>
          </section>
        </div>
    )
}
  
export default Requirements;