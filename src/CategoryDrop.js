import React, {useState}  from "react";
import {Container, Form} from "react-bootstrap";
import CategorysInput from "./CategorysInput";

 


function CategoryDrop(props) {
   const [things, setThings] = useState("");
   const [amount, setAmount] = useState("");
   const [validate, setValidate] = useState("");
   const {onIncomeChange, category} = props

   

   function handleButtonClick() {
    if(!things || !amount) {
        setValidate("Please enter Things and Amount")
        return;
    }
    onIncomeChange(category, things, amount)
    setThings("");
    setAmount("");
    setValidate("");
   
    
    
   }

   function handleThingsChange(e) {
    setThings(e.target.value)
   }

   function handleAmountChange(e) {
    setAmount(e.target.value)
    
   }


    switch (category) {
        case "income":
            return (
                
                <Container>
                    <Form style={{display:"flex"}} className="my-5">
                         <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
                         <Form.Select onChange={props.onCategoryChange}  style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={category}>
                            <option value="" disabled>Select Category</option>
                            { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                         </Form.Select>
                    </Form>
                    <CategorysInput  onButtonClick={handleButtonClick} onThingsChange={handleThingsChange} onAmountChange={handleAmountChange} label={props.category[0].toUpperCase() + props.category.substring(1)} things={things} amount={amount} validate={validate}></CategorysInput>
                </Container>
               
                
            )
            break;
        case "tips":
            return (
                <Container>
                    <Form style={{display:"flex"}} className="my-5">
                         <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
                         <Form.Select onChange={props.onCategoryChange} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={props.category}>
                            <option value="" disabled>Select Category</option>
                            { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                         </Form.Select>
                    </Form>
                    <CategorysInput onButtonClick={handleButtonClick} onThingsChange={handleThingsChange} onAmountChange={handleAmountChange} things={things} amount={amount} validate={validate} label={props.category[0].toUpperCase() + props.category.substring(1)}></CategorysInput>
                </Container>
            )
            break;
        case "expenses":
            return (
                <Container>
                    <Form style={{display:"flex"}} className="my-5">
                         <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
                         <Form.Select onChange={props.onCategoryChange} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={props.category}>
                            <option value="" disabled>Select Category</option>
                            { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                         </Form.Select>
                    </Form>
                    <CategorysInput onButtonClick={handleButtonClick} onThingsChange={handleThingsChange} onAmountChange={handleAmountChange} things={things} amount={amount} validate={validate}  label={props.category[0].toUpperCase() + props.category.substring(1)}></CategorysInput>
                </Container>
            )
            break;
        case "myself":
            return (
                <Container>
                    <Form style={{display:"flex"}} className="my-5">
                         <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
                         <Form.Select onChange={props.onCategoryChange} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={props.category}>
                            <option value="" disabled>Select Category</option>
                            { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                         </Form.Select>
                    </Form>
                    <CategorysInput onButtonClick={handleButtonClick} onThingsChange={handleThingsChange} onAmountChange={handleAmountChange} things={things} amount={amount} validate={validate}  label={props.category[0].toUpperCase() + props.category.substring(1)}></CategorysInput>
                </Container>
            )
            break;
        case "eating out":
            return (
                <Container>
                    <Form style={{display:"flex"}} className="my-5">
                         <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
                         <Form.Select onChange={props.onCategoryChange} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={props.category}>
                            <option value="" disabled>Select Category</option>
                            { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                         </Form.Select>
                    </Form>
                    <CategorysInput onButtonClick={handleButtonClick} onThingsChange={handleThingsChange} onAmountChange={handleAmountChange} things={things} amount={amount} validate={validate}  label={props.category[0].toUpperCase() + props.category.substring(1)}></CategorysInput>
                </Container>
            )
            break;
        case "misc":
            return (
                <Container>
                    <Form style={{display:"flex"}} className="my-5">
                         <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
                         <Form.Select onChange={props.onCategoryChange} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={props.category}>
                            <option value="" disabled>Select Category</option>
                            { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                         </Form.Select>
                    </Form>
                    <CategorysInput onButtonClick={handleButtonClick} onThingsChange={handleThingsChange} onAmountChange={handleAmountChange} things={things} amount={amount} validate={validate}  label={props.category[0].toUpperCase() + props.category.substring(1)}></CategorysInput>
                </Container>
            )
            break;
        case "gas":
            return (
                <Container>
                    <Form style={{display:"flex"}} className="my-5">
                         <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
                         <Form.Select onChange={props.onCategoryChange} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={props.category}>
                            <option value="" disabled>Select Category</option>
                            { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                         </Form.Select>
                    </Form>
                    <CategorysInput onButtonClick={handleButtonClick} onThingsChange={handleThingsChange} onAmountChange={handleAmountChange} things={things} amount={amount} validate={validate}  label={props.category[0].toUpperCase() + props.category.substring(1)}></CategorysInput>
                </Container>
            )
            break;
        case "groceries":
            return (
                <Container>
                    <Form style={{display:"flex"}} className="my-5">
                         <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
                         <Form.Select onChange={props.onCategoryChange} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={props.category}>
                            <option value="" disabled>Select Category</option>
                            { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                         </Form.Select>
                    </Form>
                    <CategorysInput onButtonClick={handleButtonClick} onThingsChange={handleThingsChange} onAmountChange={handleAmountChange} things={things} amount={amount} validate={validate}  label={props.category[0].toUpperCase() + props.category.substring(1)}></CategorysInput>
                </Container>
            )
            break;
        default:
            return (
                <Container>
                    <Form style={{display:"flex"}} className="my-5">
                         <Form.Label style={{fontSize:30}} className="mx-2">Category:</Form.Label>
                         <Form.Select onChange={props.onCategoryChange} style={{width: 200}} className="categoryDrop" id="categoryDropdown" value={props.category}>
                            <option value="" disabled>Select Category</option>
                            { props.categorys.map(category => <option value={category.toLocaleLowerCase()} key={category} className="categorySelect">{category}</option>)}
                         </Form.Select>
                    </Form>
                </Container>
            )

    }
     
    

};

export default CategoryDrop;

