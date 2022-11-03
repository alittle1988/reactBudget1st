import React from "react";
import Button from "./Button.js";


function CategorysInput(props) {
    
    let element = 
    <div className="inputContainer">
        <form action="#">
            <div className="inputSec">
            <label className="inputLabel" id="titleLabel">Expenses:</label>
            <input type="text" className="categoryTextField"></input>
            </div>
            
            <div className="inputSec">
            <label className="inputLabel" id="amountLabel">Amount:</label>
            <input type="number"></input>
            </div>
            
        </form>
        <Button>Submit</Button>
    </div>;


    

    
    return element;
}


export default CategorysInput;