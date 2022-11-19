import React  from "react";
import {Table} from "react-bootstrap";







function Tables(props) {
    const DisplayData = props.data.map((info) => {
        return (
            <tr key={info.id} >
                <td >{info.what}</td>
                <td>{info.amount}</td>
            </tr>
        )
    })
    
    
      
    


    return (
        <Table striped bordered hover className="table">
            <thead>
                <tr>
                    <td>{props.title}</td>
                    <td>{props.amount}</td>
                
                </tr>
            </thead>
            <tbody>
                {DisplayData}
            </tbody>
        </Table>
    );
}

export default Tables


//trying to figure out how to send input data to JSON file
 