import React from 'react';
import { func } from 'prop-types';

import './styles.scss';


const Alert = ({ onOk }) =>{
    return(
        <div className = 'alert'>
                <h3>Congratulations</h3>
                 <p>You have successfully passed the registration</p>
                 <button onClick = { ()=>onOk() }>OK</button>
        </div>
    )
}

Alert.propTypes = {
    onOk: func.isRequired
}
export default Alert;
