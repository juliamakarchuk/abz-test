import React, {Component} from 'react';

import FooterNav from './FooterNav';
import FooterContent from './FooterContent';
import SocialsBar from './SocialsBar';
import './styles.scss';

export default class Footer extends Component {
    render(){
        return(
            <div className = 'wrapper wrapper-footer'>
               <footer className = 'footer container'>
                 <FooterNav/>
                 <FooterContent/>
                 <SocialsBar/>
              </footer>
            </div>
        )
    }
}