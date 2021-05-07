import React from 'react';
import { Link }  from 'react-router-dom';

function Button(props) {
    return(
        <>
        <Link to={props.destino}>
        <button className={`btn-green ${props.lado}`}>{props.children}</button>
        </Link>
    </>
    //Button({children})
    //<button className="btn-green"}>{children}</button>
    );
}

export default Button;