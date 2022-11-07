import React from "react";
import CategorysInput from "./CategorysInput";
import Button from "./Button.js";

const categorys = ["Income", "Tips", "Expenses", "Myself", "Misc", "Gas", "Groceries"];


function CategoryDropInput() {
    
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
    </div> ;

    

    function handleCategoryChange() {
        const dropDown = document.querySelector("#categoryDropdown");
        let selectedItem = dropDown.options[dropDown.selectedIndex].value;

        
    }

   

    return (<>
        <div className="categoryContainer">
                <label className="categoryLabel">Category:</label>
                <select onChange={handleCategoryChange} className="categoryDrop" id="categoryDropdown">
                    <option value="" disabled selected>Please Select</option>
                    { categorys.map((category) => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                </select>
        </div>
    </>)
}

export default CategoryDropInput