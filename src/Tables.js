import React  from "react";
import {Table} from "react-bootstrap";







function Tables(props) {
    const displayData = props.data.map((info) => {
        return (
            <tr key={info.id} >
                <td >{info.what}</td>
                <td>{info.amount}</td>
            </tr>
        )
    });



    let total = props.data[0].amount + props.data[0].amount
      
    


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
                    <td>{total}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Tables


//trying to figure out how to send input data to JSON file
 