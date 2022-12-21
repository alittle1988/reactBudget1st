import React from "react";



export default function Totals(props) {
    const {categorys, income, tips, expenses, myself, eatingOut, misc, gas, groceries} = props;

    function getTotal(array) {
        let sum = 0;
        array.forEach(element => {
            sum += Number(element.amount)
        });
        return sum
    }
    
    
    return (
        <div className="popUp-table">
            <table className="table">
                <thead>
                    <tr>
                        <td>Categorys</td>
                        <td>Total</td>
                    </tr>
                    <tr>
                        <td>{categorys[0]}</td>
                        <td>${getTotal(income)}</td>
                    </tr>
                    <tr>
                        <td>{categorys[1]}</td>
                        <td>${getTotal(tips)}</td>
                    </tr>
                    <tr>
                        <td>{categorys[2]}</td>
                        <td>${getTotal(expenses)}</td>
                    </tr>
                    <tr>
                        <td>{categorys[3]}</td>
                        <td>${getTotal(myself)}</td>
                    </tr>
                    <tr>
                        <td>{categorys[4]}</td>
                        <td>${getTotal(eatingOut)}</td>
                    </tr>
                    <tr>
                        <td>{categorys[5]}</td>
                        <td>${getTotal(misc)}</td>
                    </tr>
                    <tr>
                        <td>{categorys[6]}</td>
                        <td>${getTotal(gas)}</td>
                    </tr>
                    <tr>
                        <td>{categorys[7]}</td>
                        <td>${getTotal(groceries)}</td>
                    </tr>
                    
                    
                </thead>
            </table>
        </div>
    )
}