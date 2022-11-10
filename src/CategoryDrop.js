import React, {useState}  from "react";
import {Container, Form} from "react-bootstrap";
import CategorysInput from "./CategorysInput";




function CategoryDrop(props) {
   
    

    
    
    let element =

    <Container>
        <Form style={{display:"flex"}} className="my-5">
            <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
            <Form.Select onChange={props.onCategoryChange} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={props.category}>
                <option value="" disabled>Select Category</option>
                { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
            </Form.Select>
        </Form>
    </Container>

    

    switch (props.category) {
        case "income":
            return (
                <>
                {element}
                <CategorysInput label={props.category[0].toUpperCase() + props.category.substring(1)}></CategorysInput>
                </>
            )
            break;
        case "tips":
            return (
                <>
                {element}
                <CategorysInput label={props.category[0].toUpperCase() + props.category.substring(1)} />
                </>
            )
            break;
        case "expenses":
            return (
                <>
                {element}
                <CategorysInput label={props.category[0].toUpperCase() + props.category.substring(1)} />
                </>
            )
            break;
        case "myself":
            return (
                <>
                {element}
                <CategorysInput label={props.category[0].toUpperCase() + props.category.substring(1)} />
                </>
            )
            break;
        case "eating out":
            return (
                <>
                {element}
                <CategorysInput label={props.category[0].toUpperCase() + props.category.substring(1)} />
                </>
            )
            break;
        case "misc":
            return (
                <>
                {element}
                <CategorysInput label={props.category[0].toUpperCase() + props.category.substring(1)} />
                </>
            )
            break;
        case "gas":
            return (
                <>
                {element}
                <CategorysInput label={props.category[0].toUpperCase() + props.category.substring(1)} />
                </>
            )
            break;
        case "groceries":
            return (
                <>
                {element}
                <CategorysInput label={props.category[0].toUpperCase() + props.category.substring(1)} />
                </>
            )
            break;
        default:
            return element

    }
     
    

};

export default CategoryDrop;

