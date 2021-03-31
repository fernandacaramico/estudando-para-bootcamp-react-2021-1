import React from 'react';

function Button(props) {
    return(
        <>
        <button className="btn-green">{props.frase}</button>
    </>
    );
}

export default Button;