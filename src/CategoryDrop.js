import React from "react";
import CategorysInput from "./CategorysInput";

const Categorys = ["Income", "Tips", "Expenses", "Myself", "Eating Out", "Misc", "Gas", "Groceries"]

function CategoryDrop() {
    
        let element = 
        <div className="categoryContainer">
            <label className="categoryLabel">Category:</label>
            <select onChange={handleCategoryChange} className="categoryDrop" id="categoryDropdown">
            <option value=""  disabled selected>Please Select</option>
            { Categorys.map(category => <option value={category.toLocaleLowerCase()} className="categorySelect">{category}</option>)}
        </select>
     </div>;

        
        
            function handleCategoryChange() {
                const dropDown = document.querySelector('#categoryDropdown');
                let selectedItem = dropDown.options[dropDown.selectedIndex].value;
                if(selectedItem === 'expenses'){
                    
                }
       
        
                alert(selectedItem)
                return selectedItem;
                
            }
        
        


    return element;

    
    

};

export default CategoryDrop;