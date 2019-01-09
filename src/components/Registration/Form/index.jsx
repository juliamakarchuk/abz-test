import React, {Component} from 'react';

import Position from '../Position';
import Photo from '../Photo';
import classNames from 'classnames/bind';
import './styles.scss';

export default class Form extends Component{
    state = {
        name: '',
        email: '',
        phone: '+380',
        photo: '',
        position: '',
        formErrors: {email:'', name: '', phone:'', position:'', photo:''},
        emailValid: false,
        nameValid: false,
        phoneValid: false,
        photoValid: false,
        formValid: false,
        positionValid: false,
        submitBtn: false
    }

    _handleSubmit = (e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('phone', this.state.phone);
        formData.append('position_id', this.state.position);
        formData.append('photo', this.state.photo);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then(response=>{
          if(response.ok) return response.json()
        })
        .then(data=>data.token)
        .then(token=>{
             fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',{
                method: 'POST',
                headers: {'Token': token},
                body: formData
            })
            .then(response=>{
                if(response.ok) {
                    this.props.onRegistration();
                    return response.json();
                }
              })
              .then(data=> console.log('data', data))
              .catch(err=> console.log(err))
            }
            )
        .catch(err=> console.log(err));
    }
    _handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(({[name]:value}),() => { this._validateField(name, value) });
    }
    _handleUserPosition = (value) =>{
        this.setState({['position']:value},
            () => { this._validateField('position', value) });
    }
    _handleUserPhoto = (value) => {
        this.setState({['photo']:value},
            () => { this._validateField('photo', value) });
    }
    _validateField=(fieldName, value)=>{
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let phoneValid = this.state.phoneValid;
        let positionValid = this.state.positionValid;
        let photoValid = this.state.photoValid;
        switch(fieldName) {
            case 'email':
              let emailPattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
              emailValid = emailPattern.test(value);
              fieldValidationErrors.email = emailValid ? '' : 'error';
              break;
            case 'name':
              nameValid = value.length >= 2 && value.length<=60;
              fieldValidationErrors.name = nameValid ? '': 'error';
              break;
            case 'phone': 
              let phonePatter = /^[\+]{0,1}380([0-9]{9})$/;
              phoneValid = phonePatter.test(value);
              fieldValidationErrors.phone = phoneValid ? '': 'error';
              break;
            case 'position':
                positionValid = value!==0;
                fieldValidationErrors.position = positionValid ? '': 'error';
                break;
            case 'photo':
                photoValid = value!=='';
                fieldValidationErrors.photo = photoValid ? '': 'error';
                break;  
            default:
              break;
          }

          this.setState({formErrors: fieldValidationErrors,
                          emailValid: emailValid,
                          nameValid: nameValid,
                          phoneValid: phoneValid,
                          positionValid: positionValid,
                          photoValid: photoValid
                        }, this.validateForm);
        }
        validateForm() {
            this.setState({formValid: this.state.emailValid &&
                                      this.state.nameValid && 
                                      this.state.phoneValid &&
                                      this.state.positionValid &&
                                      this.state.photoValid});
    }

    render(){
        let validName = classNames({
            'registration-form__item': true,
            'registration-form__item--invalid': this.state.formErrors.name==='error',
            'registration-form__item--valid': this.state.nameValid
        });
        let validEmail = classNames({
            'registration-form__item': true,
            'registration-form__item--invalid':  this.state.formErrors.email==='error',
            'registration-form__item--valid': this.state.emailValid
        });
        let validPhone = classNames({
            'registration-form__item': true,
            'registration-form__item--invalid':  this.state.formErrors.phone==='error',
            'registration-form__item--valid': this.state.phoneValid
        });

        return (
            <form action="" className = 'registration-form' onSubmit = {this._handleSubmit} onChange ={this._handleForm}>
               <div  className = {validName}>
                            <span className='registration-form-item__header'>
                                Your Name
                            </span>
                            <input   placeholder = 'Your name' name = 'name'  value = {this.state.name} onChange = {this._handleUserInput} type = 'text'/>
                </div>
                <div className = {validEmail}>
                            <span className='registration-form-item__header'>
                                Your Email
                            </span>
                            <input placeholder = 'Your email' name = 'email'  value = {this.state.email} onChange = {this._handleUserInput} type = 'email'/>
                </div>
                <div className = {validPhone }>
                            <span className='registration-form-item__header'>
                                Your Phone
                            </span>
                            <input placeholder = 'Your Phone' name = 'phone'  value={this.state.phone} onChange = {this._handleUserInput} type = 'tel'/>
                </div>
                <Position position = {this.state.position} func = {this._handleUserPosition} valid = {this.state.formErrors.position}/>
                <Photo func = {this._handleUserPhoto} valid = {this.state.formErrors.photo} />
                <button type = 'submit' className = 'registration-form__btn' disabled = {!this.state.formValid}>Sign Up</button>
            </form>
        )
    }
}