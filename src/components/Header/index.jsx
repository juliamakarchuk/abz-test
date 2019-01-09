import React, { Component } from 'react';


//Components
import HeaderMenu from './HeaderMenu';
import HeaderUser from './HeaderUser';
import HeaderLogo from './HeaderLogo';
import Baner from '../Baner'

import classNames from 'classnames/bind';
import './styles.scss';

export default class Header extends  Component {
    state = {
        menu: false
    }
    _handleClick = () =>{
        this.setState({
            menu: !this.state.menu
        })
    }
    _onHideMenu = () =>{
        if(this.state.menu){
            this.setState({
                menu: false
            })
        }
    }
    render () {
        let toggleMenu = classNames({
            'header__navigation-menu': true,
            'header__navigation-menu--show': this.state.menu
        })
        return (
             <div className = 'header'>
                <div className= 'wrapper wrapper--header'>
                <div className = 'header__navigation container'>
                 <HeaderLogo toggleMenu = { this._handleClick } hideMenu = {this._onHideMenu}/>
                 <div className = {toggleMenu}>
                  <HeaderUser />
                  <HeaderMenu />
                  </div>
                </div>
                </div>
               <Baner hideMenu = {this._onHideMenu}/>
            </div>
        )
    }
}