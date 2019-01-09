import React, {Component} from 'react';

import './styles.scss';
import classNames from 'classnames/bind';

export default class Photo extends Component{

    state = {
        loadFile: 'Load file',
        photoValid: ''
    }

    render(){
        let saveFile = (e) => {
            if(!e.target.files[0]) return;
            let photo = e.target.files[0];
            if(!photo) return;
            if(photo.type === 'image/jpeg' && photo.size<5000000 && photo.size>2000){
                this.setState({
                    loadFile: e.target.files[0],
                    photoValid: ''});  
                this.props.func(photo); 
            } else{
                this.setState({photoValid: 'error'});
                this.props.func(''); 
            }
        }

        let loadPhotoInput = classNames({
            'form-input': true,
            'input-notValid': this.state.photoValid == 'error'
        });

        return(
            <div className = 'loadphoto-block'>
                <form action = "">
                <input id = 'fileInput' className = { loadPhotoInput } type='file' onChange={(e) => saveFile(e)} placeholder = 'Upload your photo' required/>
                <button className='loadphoto__btn'> Upload</button>
                </form>
                <p className='loadphoto__text'>File format jpg  up to 5 MB, the minimum size of 70x70px</p>
            </div>
        )
    }
}