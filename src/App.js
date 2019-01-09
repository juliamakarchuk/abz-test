import React, { Component } from 'react';

//Components
import Header from '../src/components/Header';
import Acquinted from '../src/components/Acquainted';
import Technologies from '../src/components/Technologies';
import Requirements from '../src/components/Requirements';
import Users from '../src/components/Users';
import Registration from '../src/components/Registration';
import Footer from '../src/components/Footer';
import Alert from '../src/components/Alert';

import '../src/css/styles.scss';
import classNames from 'classnames/bind';

class App extends Component {

  state = {
    alert : false,
  }

  _onRegistration = ()=>{
      this.setState({
        alert: true
      })
  }
  _onOk = () =>{
    this.setState({
      alert: false
    })
  }
  render() {
    let renderAlert = () => this.state.alert ? <Alert onOk = {this._onOk}/> : null;
    let appCls = classNames({
      'App': this.state.alert
    });
    return (
      <div className = { appCls }>
          <Header />
          <Acquinted />
          <Technologies />
          <Requirements />
          <Users />
          <Registration onRegistration = {this._onRegistration}/>
          <Footer />
          {renderAlert()}
      </div>
    );
  }
}

export default App;
