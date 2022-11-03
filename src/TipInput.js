import React from "react";
import Button from "./Button.js";

function TipInput() {

    return (<>

        <div className="tipInputContainer">
            <form action="#">
                <div className="inputSec">
                    <label className="inputLabel" id="titleLabel">Tips Date:</label>
                    <input type="text" clasName="inputTextField"></input>
                </div>
                <div className="inputSec">
                    <label className="inputLabel" id="amountLabel">Amount:</label>
                    <input type="number"></input>
                </div>
            </form>
                                                                                                                                                                                          
            <Button clasName="submitButton">Submit</Button>
        </div>                                                                                                
                                                               
    </>)
}

export default TipInput;