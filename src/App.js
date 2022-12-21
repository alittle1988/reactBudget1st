import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container} from 'react-bootstrap';
import Header from "./Header.js";
import CategoryDrop from "./CategoryDrop.js";
import Tables from "./Tables.js";
import Totals from "./Totals.js"



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
  const [showTotals, setShowTotals] = useState(false)

  function getTotal(array) {
    let sum = 0;
    array.forEach(element => {
        sum += Number(element.amount)
    });
    return sum
}

const handleShowTotal = () => {
  if(showTotals === true) {
    setShowTotals(false)
  } else {
    setShowTotals(true)
  }
}
  
 /* const setLocalStorage = (array) => {
    for(let x in array){
    localStorage.setItem(array[x], JSON.stringify(income))
  
  }
}*/

  const incomeLocal = (obj, para) => {
    localStorage.setItem(JSON.stringify(obj), JSON.stringify(para))
  }
  //setLocalStorage(categorys)

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function incomeChange(category, name, amount) {
    let id = 0;
    if(category === "income"){
      setIncome([...income, {id: id,name:name, amount:amount}])
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
    switch(category) {
      case "income":
        id = income.length
        incomeLocal(category, [...income, {id:id, name:name, amount:amount}])
        break;
      case "tips":
        id = tips.length
        incomeLocal(category, [...tips, {id:id, name:name, amount:amount}])
        break;
      case "expenses":
        id = expenses.length
        incomeLocal(category, [...expenses, {id:id, name:name, amount:amount}])
        break;
      case "myself":
        id = myself.length
        incomeLocal(category, [...myself, {id:id, name:name, amount:amount}])
        break;
      case "eating out":
        id = eatingOut.length
        incomeLocal(category, [...eatingOut, {id:id, name:name, amount:amount}])
        break;
      case "misc":
        id = misc.length
        incomeLocal(category, [...misc, {id:id, name:name, amount:amount}])
        break;
      case "gas":
        id = gas.length
        incomeLocal(category, [...gas, {id:id, name:name, amount:amount}])
        break;
      case "groceries":
        id = groceries.length
        incomeLocal(category, [...groceries, {id:id, name:name, amount:amount}])
        break;
      default:
        alert("You Lose the Game!")
          
    }
    
    

  }
  
  
  return (
    <div className="App">
      <Header />
      <div className='row'>
        <div className='col-6'>
          <CategoryDrop onIncomeChange={incomeChange} onIncomeLocal={incomeLocal} onCategoryChange={handleCategoryChange} income={income} categorys={categorys} category={category}></CategoryDrop>
        </div>
        <div className='col-4 m-5'>
          <button className='btn btn-primary' onClick={handleShowTotal}>See Category totals</button>
        </div>
      </div>
      {showTotals === true ? <Totals categorys={categorys} income={income} tips={tips} expenses={expenses} myself={myself} eatingOut={eatingOut} misc={misc} gas={gas} groceries={groceries}  /> : <div></div>}
      
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


/// left off trying to store and array of objects in local storage named by category!