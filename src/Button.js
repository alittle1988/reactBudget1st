import clsx from "clsx";
import React from "react";


function Button(props) {
    let {className, children, ...rest} = props
    const classes = clsx("submitButton", className)
    return (
        <button className={classes} {...rest}>{children}</button>
    )
}


export default Button;