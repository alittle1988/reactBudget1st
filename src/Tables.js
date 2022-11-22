import React  from "react";
import {Table} from "react-bootstrap";







function Tables(props) {
    const data = props.data;
    
    const displayData = data.map((info) => {
        return (
            <tr key={info.id} >
                <td className="what">{info.what}</td>
                <td className={props.title[0].toLowerCase() + props.title.substring(1) + 'Amount'}>${info.amount}</td>
            </tr>
        )
    });
    

    let sum = 0;
    for(let x in data) {
        sum = sum + data[x].amount
    }
   
   
   

    


    return (
        <Table striped bordered hover className="table">
            <thead>
                <tr>
                    <td>{props.title}</td>
                    <td>{props.amount}</td>
                
                </tr>
            </thead>
            <tbody>
                {displayData}
                <tr>
                    <td>Total</td>
                    <td>${sum}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Tables


//trying to figure out how to send input data to JSON file
 