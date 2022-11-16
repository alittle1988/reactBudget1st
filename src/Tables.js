import React  from "react";
import {Table} from "react-bootstrap";



function Tables(props) {
    const {title, array} = props;
    
    
        
    


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
                
                
            </tbody>
        </Table>
    )
}

export default Tables

// need to use submit button to insert data to table
 