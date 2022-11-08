import React, {useState} from "react";
//import Button from "./Button.js";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';




function CategorysInput(props) {
    const {label,} = props
    
    let element = 
        <Container  >
                <Row className="justify-content-center">
                    <Form>
                        <Form.Group>
                            <Form.Label>{label}</Form.Label>
                            <Form.Control type="text" placeholder="Things" style={{width:150}}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Amount:</Form.Label>
                            <Form.Control type="text" placeholder="$0.00" style={{width:150}}></Form.Control>
                        </Form.Group>
                    </Form>
                </Row>
        </Container>

    /*let element = 
    <div className="inputContainer">
        <form action="#">
            <div className="inputSec">
            <label className="inputLabel" id="titleLabel">{label}</label>
            <input type="text" className="categoryTextField"></input>
            </div>
            
            <div className="inputSec">
            <label className="inputLabel" id="amountLabel">Amount:</label>
            <input type="number"></input>
            </div>
            
        </form>
        <Button>Submit</Button>
    </div>;*/


    

    
    return element;
}


export default CategorysInput;