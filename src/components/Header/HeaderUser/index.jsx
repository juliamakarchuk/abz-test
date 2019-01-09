import React, { Component } from 'react';

import './styles.scss';


export default class HeaderUser extends  Component {
    state = {
        userName: '',
        userMail: '',
        userImg: ''
    }
    componentDidMount(){
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
        .then(response=>{
            if(response.ok){
                return response.json()
            }
            throw new Error('Error while fetching'+response.statusText)
        })
        .then(data =>{
            let user = data.user;
            this.setState({
                userName: user.name,
                userMail: user.email,
                userImg: user.photo
            })
        })
        .catch(err=>console.log(err))
    }

    render () {
        let { userName, userMail, userImg } = this.state;
        return (
            <div className = 'nav-menu__user-block'>
                <img src= { userImg } alt="user photo"/>
                 <div className = 'user-block__descr'>
                   <p className = 'user-block__name'>{ userName }</p>
                   <p className = 'user-block__mail'>{ userMail }</p>
                 </div>
                 <i className = 'user-block__icon'></i>
            </div>
        )
    }
}