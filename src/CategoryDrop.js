import React, { createElement } from "react";
import CategorysInput from "./CategorysInput";


function CategoryDrop() {

    function handleCategoryChange() {
        const dropDown = document.querySelector('#categoryDropdown');
        let selectedItem = dropDown.options[dropDown.selectedIndex].value;
        const input = document.querySelector("#input");
        
        alert(selectedItem)
        if(selectedItem === 'expenses'){
           return <CategorysInput></CategorysInput>
            
        }
        
    };


    return (<>
        <div className="categoryContainer">
            <label className="categoryLabel">Category:</label>
            <select onChange={handleCategoryChange} className="categoryDrop" id="categoryDropdown">
                <option value=""  disable selected>Please Select</option>
                <option value="income" className="categorySelect">Income</option>
                <option value="tips" className="categorySelect">Tips</option>
                <option value="expenses" className="categorySelect">Expenses</option>
                <option value="myself" className="categorySelect">Myself</option>
                <option value="eating-out" className="categorySelect">Eating Out</option>
                <option value="misc" className="categorySelect">Misc</option>
                <option value="gas" className="categorySelect">Gas</option>
                <option value="groceries" className="categorySelect">Groceries</option>
            </select>
        </div>
        <div className="inputSection" id="input">

        </div>
        
    </>)
}

export default CategoryDrop;