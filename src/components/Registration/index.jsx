import React, { Component } from 'react';

import Form from './Form';

import { func } from 'prop-types';

import './styles.scss';


export default class Registration extends Component{
    render(){
        return(
            <div className = 'wrapper'>
             <section className = 'registration-block container' id = 'registration-block'>
                <h2 className = 'registration-block__title'>Register to get a work</h2>
                <p className = 'registration-block__text'>Attention! After successful registration 
                and alert, update the list of users in the block from the top</p>
                <Form onRegistration = { this.props.onRegistration }/>
            </section>
            </div>
        )
    }
}
Registration.propTypes = {
    onRegistration: func.isRequired
}