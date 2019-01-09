import React, {Component} from 'react';


import User from './User';
import Spinner from '../Spinner';

import './styles.scss';
import classNames from 'classnames/bind';

export default class Users extends Component {
    
    state = {
        users: [],
        page: 1,
        buttonDisabled: false,
        isLoading: true
    }

    _fetchUsers = (page, count) =>{
       return  fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
        .then(response=>{
            if(response.ok){
                return response.json()
            }
            throw new Error('Error while fetching'+response.statusText)
        })
        .then(data=>data)
        .catch(err=>console.log(err))
    }

    _showMore = () => {
        this._fetchUsers(this.state.page, 6) 
        .then(result => {
            if(result.users.length < 6) this.setState({buttonDisabled: true})
            this.setState({
                users: [...this.state.users, ...result.users],
                page: this.state.page+1
            })
        })
        .catch(err=>console.log('err', err))
    }

    componentDidMount (){
        this._fetchUsers(1 ,6)
        .then(result=>{
            this.setState({
                users: result.users,
                page: this.state.page + 2,
                isLoading: false
            })
        })
    }

    _handleClick = () =>{
      if(!this.state.buttonDisabled){
          this._showMore()
      } else{
         this.setState({buttonDisabled: false})
         this.setState({users:[], page: 1});
         this._fetchUsers(1 ,6)
         .then(result=>{
             this.setState({
                 users: result.users,
                 page: this.state.page + 2,
                 isLoading: false
             })
         })
      }
    }

    render(){
        let buttonCls = classNames({
            'users-block__btn': true,
            'users-block__btn--disabled': this.state.buttonDisabled
        });
        if(this.state.isLoading) {
            return (
                <div className = 'wrapper wrapper-spinner'>
                   <section className = 'users-block container' id = 'users-block'>
                     <h2 className = 'users-block__title'>Our cheerful users</h2>
                     <p className = 'users-block__text'>Attention! Sorting users by registration date</p>
                         <Spinner/>
                   </section>
                 </div>
            )
       }
        return (
            <div className = 'wrapper'>
               <section className = 'users-block container' id = 'users-block'>
                  <h2 className = 'users-block__title'>Our cheerful users</h2>
                  <p className = 'users-block__text'>Attention! Sorting users by registration date</p>
                  <div className = 'users-list'>
                     {this.state.users.map((el, idx) => <User key = {idx} {...el} />)}
                  </div>
                  <button className = {buttonCls} onClick = {this._handleClick}>Show more</button>
               </section>
            </div>
        )
    }
}
