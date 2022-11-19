import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container} from 'react-bootstrap';
import Header from "./Header.js";
import CategoryDrop from "./CategoryDrop.js";
import Tables from "./Tables.js";
import data from "./data.json";



const categorys = ["Income", "Tips", "Expenses", "Myself", "Eating Out", "Misc", "Gas", "Groceries"]





function App() {
  const [category, setCategory] = useState("");
  const [income, setIncome] = useState([]);
  const [tips, setTips] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [myself, setMyself] = useState([]);
  const [eatingOut, setEatingOut] = useState([]);
  const [misc, setMisc] = useState([]);
  const [gas, setGas] = useState([]);
  const [groceries, setGroceries] = useState([]);
  

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function incomeChange(category, name, amount) {
    if(category === "income"){
      setIncome([...income, {name:name, amount:amount}])
    }else if(category === "tips") {
      setTips([...tips, {name:name, amount:amount}])
    } else if( category === "expenses") {
      setExpenses([...expenses, {name:name, amount:amount}])
    } else if (category === "myself"){
      setMyself([...myself, {name:name, amount:amount}])
    } else if (category === "eating out"){
      setEatingOut([...eatingOut, {name:name, amount:amount}])
    } else if (category === "misc"){
      setMisc([...misc, {name:name, amount:amount}])
    } else if (category === "gas"){
      setGas([...gas, {name:name, amount:amount}])
    } else if (category === "groceries"){
      setGroceries([...groceries, {name:name, amount:amount}])
    }


  }
  
 
 
  
  return (
    <div className="App">
      <Header />
      <CategoryDrop onIncomeChange={incomeChange} onCategoryChange={handleCategoryChange} income={income} categorys={categorys} category={category}></CategoryDrop>
     
      <Container className='tableContainer'>
        <h1 className='tableContainerH1'>Tables</h1>
        <Tables title={"Income"} amount={"Amount"} data={data[0].Income}/>
        <Tables title={"tips"} amount={"Amount"} data={data[0].Tips} />
          
      </Container>
    </div>
  );
};

export default App;


// left off moving state up from categoryInput to App