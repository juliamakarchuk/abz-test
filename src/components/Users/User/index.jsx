import React, {Component} from 'react';

import './styles.scss';

export default class User extends Component{
  render(){
      let { name, email, position, photo, phone } = this.props;
      let _name = () => {
          if(name.length >= 10) {
            return name.split('').splice(0, 20).join('')+'...';
          }
          return name;
      }
      let _email = () => {
        if(email.length >= 20) {
            return email.split('').splice(0, 30).join('')+'...';
          }
          return email;
      }
      return(
          <div className = 'user-block'>
            <img className = 'user-block-photo' src = { photo } alt= {`${name} photo`}/>
            <div className = 'user-block__info'>
               <h4 className = 'user-name' dataTitle = { name }> { _name() } </h4>
               <p className = 'user-position'> {position} </p>
               <p className = 'user-email' dataTitle = { email }> { _email() } </p>
               <p className = 'user-phone'> {phone} </p>
            </div>
          </div>
      )
  }
}