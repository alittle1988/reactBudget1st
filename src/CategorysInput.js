import React, {useState} from "react";
//import Button from "./Button.js";
import { Button, Form, Container, Row } from 'react-bootstrap';




function CategorysInput(props) {
    const [validate, setValidate] = useState("");
    const [things, setThings] = useState("");
    const [amount, setAmount] = useState("");
    
    const {label} = props;

    function onButtonClick() {
        if(!things || !amount) {
            setValidate("Please enter things and amount!")
            return;
        }
        alert("fuck Yeah");
        setThings("")
        setAmount("")
        setValidate("")
    }
    
    let element = 
        <Container  >
                <Row className="justify-content-center">
                    <Form>
                        <Form.Group>
                            <Form.Label>{label}</Form.Label>
                            <Form.Control onChange={e => setThings(e.target.value)} type="text" value={things} placeholder="Things" style={{width:150}}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control onChange={e => setAmount(e.target.value)} type="text" value={amount} placeholder="$0.00" style={{width:150}}></Form.Control>
                        </Form.Group>
                    </Form>
                    <div className="validate">{validate}</div>
                </Row>
                <Button onClick={onButtonClick} className="submitButton">Submit</Button>
        </Container>



    

    
    return element;
}


export default CategorysInput;