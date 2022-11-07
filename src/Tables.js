import React,  { useState } from "react";




function Tables(props) {
    const {title} = props;

    return (<>
        <table className="expenseTable">
            <tr>
                <th>{title}</th>
                <th>Amount</th>
            </tr>
            <tr>
                <td>Stuff</td>
                <td>10</td>
            </tr>
    
        </table>
        
        
        
        </>)
}

export default Tables
