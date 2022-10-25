import React from "react";


function CategoryDrop() {


    return (
        <div className="categoryContainer">
            <label className="categoryLabel">Category:</label>
            <select className="categoryDrop" id="categoryDropdown">
                <option className="categorySelect">Income</option>
                <option className="categorySelect">Tips</option>
                <option className="categorySelect">Expenses</option>
                <option className="categorySelect">Myself</option>
                <option className="categorySelect">Eating Out</option>
                <option className="categorySelect">Misc</option>
                <option className="categorySelect">Gas</option>
                <option className="categorySelect">Groceries</option>
            </select>
        </div>
    )
}

export default CategoryDrop;