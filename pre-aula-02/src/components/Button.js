import React from 'react';

function Button({children}) {
    return(
        <>
        <button className="btn-green">{children}</button>
    </>
    );
}

export default Button;