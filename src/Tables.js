import React  from "react";
import {Table} from "react-bootstrap";
import {tableData} from './data.json'



function Tables(props) {
    const {title, array} = props;
    
    
        
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
                </tr>
            </thead>
            <tbody>
                {array.map((item, index) => <tr key={index}><td>{item.name}</td><td>${Number(item.amount)}</td></tr>)}
                <tr>
                    <td>Total</td>
                    <td>${sum.toFixed(2)}</td>
                </tr>
                
            </tbody>
        </Table>
    )
}

export default Tables


//trying to figure out JSON to hold table info
 