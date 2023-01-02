import React from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import DateClock from "./DateClock.js";

function Header(props) {
  const { years, year, months, month, onYearChange, onMonthChange } = props;
  return (
    <Container className="header" fluid>
      <h1 className="text-center">Budget App</h1>
      <button onClick={() => props.onEditYearData(month)}>Test</button>
      <DateClock />
      <Row className="headerRow">
        <Col className="headerCol">
          <Form style={{ display: "flex" }} className="my-2">
            <Form.Label style={{ fontSize: 25 }} className="mx-4">
              years:{" "}
            </Form.Label>
            <Form.Select
              onChange={onYearChange}
              className="yearSelect"
              defaultValue={year}
              style={{ width: 130, height: 40 }}
            >
              <option>Select</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </Form.Select>
          </Form>
        </Col>
        <Col className="headerCol">
          <Form style={{ display: "flex" }} className="my-2">
            <Form.Label style={{ fontSize: 25 }} className="mx-3">
              Months:
            </Form.Label>
            <Form.Select
              onChange={onMonthChange}
              className="monthSelect"
              defaultValue={month}
              style={{ width: 130, height: 40 }}
            >
              <option>Select</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </Form.Select>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
