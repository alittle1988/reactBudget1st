import React  from "react";
import {Table} from "react-bootstrap";



function Tables(props) {
    const {title, array, onCellDeleteBtn} = props;
    
    
        
    let sum = 0;
    for(let x in array) {
        sum = sum + Number(array[x].amount)
    }


    return (
        <Table striped bordered hover className="table">
            <thead>
                <tr>
                    <th className="title">{title}</th>
                    <th className="amount" style={{backgroundColor: "green"}}>Amount</th>
                    <th className="delete">Delete</th>
                </tr>
            </thead>
            <tbody>
                {array.map((item, index) => <tr key={index}><td>{item.name}</td><td>${Number(item.amount).toFixed(2)}</td><td><button className="btn btn-success" onClick={() => onCellDeleteBtn(array, item, title)} >delete</button></td></tr>)}
                <tr>
                    <td>Total</td>
                    <td>${sum.toFixed(2)}</td>
                </tr>
                
            </tbody>
        </Table>
    )
}

export default Tables

 