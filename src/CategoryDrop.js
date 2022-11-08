import React, {useState}  from "react";
import CategorysInput from "./CategorysInput";


const Categorys = ["Income", "Tips", "Expenses", "Myself", "Eating Out", "Misc", "Gas", "Groceries"]

function CategoryDrop() {
    const [category, setCategory] = useState("");
    const [incomeTable, setIncomeTable] = useState(<tr><td>stuff</td><td>5</td></tr>)
    
    
    let element =
    <>
    <div className="categoryContainer">
        <label className="categoryLabel">Category:</label>
        <select onChange={e => setCategory(e.target.value)} className="categoryDrop" id="categoryDropdown" value={category}>
        <option value=""  disabled selected>Please Select</option>
        { Categorys.map((category) => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
        </select>
    </div>
    </>

    switch (category) {
        case "income":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1) + ":"}></CategorysInput>
                </>
            )
            break;
        case "tips":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1) + ":"} />
                </>
            )
            break;
        case "expenses":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1) + ":"} />
                </>
            )
            break;
        case "myself":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1) + ":"} />
                </>
            )
            break;
        case "eating out":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1) + ":"} />
                </>
            )
            break;
        case "misc":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1) + ":"} />
                </>
            )
            break;
        case "gas":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1) + ":"} />
                </>
            )
            break;
        case "groceries":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1) + ":"} />
                </>
            )
            break;

    }
     
    return element

};

export default CategoryDrop;