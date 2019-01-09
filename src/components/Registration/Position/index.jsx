import React, {Component} from 'react';

import './styles.scss';
import classNames from 'classnames/bind';


export default class Position extends Component {
   state = {
       span: 'Select you position',
       positions: [],
       show: false
   }
    componentDidMount(){
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then(response=>{
            if(response.ok) return response.json();

           throw new Error('Error while fetching'+response.statusText)
        })
        .then(data=> {
            this.setState({
                positions:[...data.positions]
            })
        })
        .catch(err=>console.log(err))
    }
    _renderCollection=()=>{
        return this.state.positions.map(el=>{
            return <li data-value = {el.id} key = {el.id} name = 'position'><span>{el.name}</span></li>
        })
    }
    _handleClick = (e) => {
        if(e.target.nodeName == 'LI'){
            let text = e.target.childNodes[0].textContent;
            let value = e.target.dataset.value;
            this.props.func(value);
            this.setState({
                span: text
            })
        }
    }
    render(){
        let validPosition = classNames({
            'position-block': true,
            'position-block-active': this.state.show,
            'position-invalid': this.props.position == '0'
        });
        return(
            <div className = {validPosition} onClick = {()=>this.setState({show:!this.state.show})}>
              <div className = 'position-block__text'>
              <span> {this.state.span} </span>
              <i className = 'position-block__icon'></i>
              </div>
               <ul onClick = {this._handleClick}>
                   {this._renderCollection()}
               </ul>
            </div>
        )
    }
}