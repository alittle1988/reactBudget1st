import React, {useState}  from "react";
import {Container, Form} from "react-bootstrap";
import CategorysInput from "./CategorysInput";


const Categorys = ["Income", "Tips", "Expenses", "Myself", "Eating Out", "Misc", "Gas", "Groceries"]

function CategoryDrop() {
    const [category, setCategory] = useState("");
    

    
    
    let element =

    <Container>
        <Form style={{display:"flex"}} className="my-5">
            <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
            <Form.Select onChange={e => setCategory(e.target.value)} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={category}>
                <option value="" disabled>Select Category</option>
                { Categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
            </Form.Select>
        </Form>
    </Container>

    

    switch (category) {
        case "income":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1)}></CategorysInput>
                </>
            )
            break;
        case "tips":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1)} />
                </>
            )
            break;
        case "expenses":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1)} />
                </>
            )
            break;
        case "myself":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1)} />
                </>
            )
            break;
        case "eating out":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1)} />
                </>
            )
            break;
        case "misc":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1)} />
                </>
            )
            break;
        case "gas":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1)} />
                </>
            )
            break;
        case "groceries":
            return (
                <>
                {element}
                <CategorysInput label={category[0].toUpperCase() + category.substring(1)} />
                </>
            )
            break;
        default:
            return element

    }
     
    

};

export default CategoryDrop;

