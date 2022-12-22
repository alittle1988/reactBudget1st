import React from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import DateClock from "./DateClock.js";

function handleYearChange() {
    alert("super duper gang");
}

const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const months= ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]


function Header() {
    return (
        <Container className="header" fluid>
            <h1 className="text-center">Budget App</h1>
            <DateClock />
            <Row className="headerRow">
                <Col className="headerCol">
                    <Form style={{display:"flex"}} className="my-2">
                        <Form.Label style={{fontSize:25}} className="mx-4">years: </Form.Label>
                        <Form.Select onChange={handleYearChange} style={{width:120, height:40}}>
                            { years.map((year,index) => <option key={index} value={year}>{year}</option>)}
                        </Form.Select>
                    </Form>
                </Col>
                <Col className="headerCol">
                    <Form style={{display:"flex"}} className="my-2">
                        <Form.Label style={{fontSize:25}} className="mx-3">Months:</Form.Label>
                        <Form.Select onChange={handleYearChange}  style={{width:120, height:40}}>
                            { months.map((month, index) => <option key={index} value={month}>{month}</option>)}
                        </Form.Select>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Header