import React,  { useState } from "react";




function Tables(props) {
    const {title} = props;

    return (<>
        <table className="expenseTable">
            <tr>
                <th>{title}</th>
                <th>Amount</th>
            </tr>
                
    
        </table>
        
        
        
        </>)
}

export default Tables
