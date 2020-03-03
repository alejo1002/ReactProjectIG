import React from 'react';

const AlertMessage = (props) =>{
    return(
        <div>
            <div className={`alert alert-${props.rol}`} role="alert">
                <p style={{textAlign:"center"}}>{props.message}</p>
            </div>
        </div>
    );
}

export default AlertMessage;