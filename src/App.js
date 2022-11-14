import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container} from 'react-bootstrap';
import Header from "./Header.js";
import CategoryDrop from "./CategoryDrop.js";
import Tables from "./Tables.js";


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
        {income.length > 0 ? <Tables title={categorys[0]} array={income} /> : <div></div>}
        {tips.length > 0 ? <Tables title={categorys[1]} array={tips} /> : <div></div>}
        {expenses.length > 0 ? <Tables title={categorys[2]} array={expenses} /> : <div></div>}
        {myself.length > 0 ? <Tables title={categorys[3]} array={myself} /> : <div></div>}
        {eatingOut.length > 0 ? <Tables title={categorys[4]} array={eatingOut} /> : <div></div>}
        {misc.length > 0 ? <Tables title={categorys[5]} array={misc} /> : <div></div> }
        {gas.length > 0 ? <Tables title={categorys[6]} array={gas} /> : <div></div> }
        {groceries.length > 0 ? <Tables title={categorys[7]} array={groceries} /> : <div></div>}
          
      </Container>
    </div>
  );
};

export default App;


// left off moving state up from categoryInput to App