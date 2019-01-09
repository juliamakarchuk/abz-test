import React from 'react';

import './styles.scss';
import htmlImage from '../../images/html.svg';
import cssImage from '../../images/css.svg';
import jsImage from '../../images/javascript.svg'

const Technologies = () =>{
    return(
        <div className = 'wrapper'>
            <section className = 'technologies-block container' id = 'technologies-block'>
                <h2 className = 'technologies-block__title'>
                About my relationships with  web-development
                </h2>
                <div className = 'technologies-block__list'>
                   <div className ='technologies__item'>
                     <img src = {htmlImage} alt="html" className = 'technologies__item-img'/>
                     <div>
                       <h3 className = 'technologies__item-subtitle'>I'm in love with HTML</h3>
                       <p className ='technologies__item-text'>Hypertext Markup Language (HTML) is the standard 
                        markup language for creating web pages and web applications.</p>
                     </div>
                   </div>
                   <div className ='technologies__item'>
                     <img src = {cssImage} alt="css" className = 'technologies__item-img'/>
                     <div>
                       <h3 className = 'technologies__item-subtitle'>CSS is my best friend</h3>
                       <p className ='technologies__item-text'>Cascading Style Sheets (CSS) 
                       is a style sheet language used for describing 
                       the presentation of a document written in a markup 
                       language like HTML...</p>
                     </div>
                   </div>
                   <div className ='technologies__item'>
                     <img src = {jsImage} alt="js" className = 'technologies__item-img'/>
                     <div>
                     <h3 className = 'technologies__item-subtitle'>JavaScript is my passion</h3>
                     <p className ='technologies__item-text'>JavaScript is a high-level, interpreted programming language. 
                         It is a language which is also characterized as dynamic, weakly 
                         typed, prototype-based and multi-paradigm.</p>
                     </div>
                   </div>
                </div>
            </section>
        </div>
    )
}

export default Technologies;