import React from "react";
import { Form, Col, Row } from "react-bootstrap";
function handleYearChange() {
    alert("super duper gang");
}

const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const months= ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]


function Header() {
    return (
        <div className="header">
            <h1>Budget App</h1>
            
            <Row className="headerRow">
                <Col className="headerCol">
                    <Form style={{display:"flex"}} className="my-2">
                        <Form.Label style={{fontSize:25}} className="mx-3">years: </Form.Label>
                        <Form.Select onChange={handleYearChange} style={{width:120, height:40}}>
                            { years.map((year) => <option value={year}>{year}</option>)}
                        </Form.Select>
                    </Form>
                </Col>
                <Col className="headerCol">
                    <Form style={{display:"flex"}} className="my-2">
                        <Form.Label style={{fontSize:25}} className="mx-3">Months:</Form.Label>
                        <Form.Select onChange={handleYearChange}  style={{width:120, height:40}}>
                            { months.map(month => <option value={month}>{month}</option>)}
                        </Form.Select>
                    </Form>
                </Col>
            </Row>
            
        </div>
    )
}

export default Header