import React from "react";
import Button from "./Button.js";


function CategorysInput() {
    
    return (<>

            <div className="inputContainer">
                <form action="#">
                    <div className="inputSec">
                    <label className="inputLabel" id="titleLabel">Expenses:</label>
                    <input type="text" className="categoryTextField"></input>
                    </div>
                    
                    <div className="inputSec">
                    <label className="inputLabel" id="amountLavel">Amount:</label>
                    <input type="text"></input>
                    </div>
                    
                </form>
                <Button className="submitButton" >Submit</Button>
            </div>
            
    
    </>)
}


export default CategorysInput;