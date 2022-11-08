import clsx from "clsx";
import React from "react";


function Button(props) {

    function handleSubmitClick() {
        alert("Fuck yeah")
        
    };

    let {className, children, ...rest} = props
    const classes = clsx("submitButton", className)
    return (
        <button onClick={handleSubmitClick}  className={classes} {...rest}>{children}</button>
    )
}


export default Button;