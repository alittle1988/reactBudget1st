import React from "react";


function Header() {
    return (
        <div className="header">
            <h1>Budget</h1>
            <select className="yearDropdown">
                <option className="year">2022</option>
                <option className="year">2023</option>
                <option className="year">2024</option>
                <option className="year">2025</option>
                <option className="year">2026</option>
                <option className="year">2027</option>
                <option className="year">2028</option>
                <option className="year">2029</option>
                <option className="year">2030</option>
                <option className="year">2031</option>
            </select>
            <ul className="ul-header">
                <li>
                    <a href="#" className="link">January</a>
                </li>
                <li>
                    <a href="#" className="link">Febuary</a>
                </li>
                <li>
                    <a href="#" className="link">March</a>
                </li>
                <li>
                    <a href="#" className="link">April</a>
                </li>
                <li>
                    <a href="#" className="link">May</a>
                </li>
                <li>
                    <a href="#" className="link">June</a>
                </li>
                <li>
                    <a href="#" className="link">July</a>
                </li>
                <li>
                    <a href="#" className="link">August</a>
                </li>
                <li>
                    <a href="#" className="link">September</a>
                </li>
                <li>
                    <a href="#" className="link">October</a>
                </li>
                <li>
                    <a href="#" className="link">November</a>
                </li>
                <li>
                    <a href="#" className="link">December</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;