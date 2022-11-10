import React,  { useState } from "react";
import {Table, Container} from "react-bootstrap";



function Tables(props) {
    const {title} = props;

    let element = 
    
        <Table striped bordered hover className="table">
            <thead>
                <tr>
                    <th className="title">{title}</th>
                    <th className="amount" style={{backgroundColor: "green"}}>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Stuff</td>
                    <td>Money</td>
                </tr>
                
            </tbody>
        </Table>
    


    return element
}

export default Tables

// need to use submit button to insert data to table
 