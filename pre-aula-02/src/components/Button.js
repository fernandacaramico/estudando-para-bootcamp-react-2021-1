import React from 'react';

function Button(props) {
    return(
        <>
        <button className={`btn-green ${props.lado}`}>{props.children}</button>
    </>
    //Button({children})
    //<button className="btn-green"}>{children}</button>
    );
}

export default Button;