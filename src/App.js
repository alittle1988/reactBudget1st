import React, { useState, useEffect } from 'react';
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
  const [income, setIncome] = useState(() => {
    const data = localStorage.getItem("income");
    const theData = JSON.parse(data);
    return theData || [];
  });
  const [tips, setTips] = useState(() => {
    const data = localStorage.getItem("tips");
    const theData = JSON.parse(data);
    return theData || [];
  });
  const [expenses, setExpenses] = useState([]);
  const [myself, setMyself] = useState([]);
  const [eatingOut, setEatingOut] = useState([]);
  const [misc, setMisc] = useState([]);
  const [gas, setGas] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [showTotals, setShowTotals] = useState(false);
  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("tips", JSON.stringify(tips));
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("myself", JSON.stringify(myself));
    localStorage.setItem("eatingOut", JSON.stringify(eatingOut));
    localStorage.setItem("misc", JSON.stringify(misc));
    localStorage.setItem("gas", JSON.stringify(gas));
    localStorage.setItem("groceries", JSON.stringify(groceries));
  }, [income, tips, expenses, myself, eatingOut, misc, gas, groceries])

const handleShowTotal = () => {
  setShowTotals(!showTotals)
  
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
      id = income.length;
      setIncome([...income, {id: id, name:name, amount:amount}])
    }else if(category === "tips") {
      id = tips.length;
      setTips([...tips, {id: id, name:name, amount:amount}])
    } else if( category === "expenses") {
      id = expenses.length;
      setExpenses([...expenses, {id: id, name:name, amount:amount}])
    } else if (category === "myself"){
      id = myself.length
      setMyself([...myself, {id: id, name:name, amount:amount}])
    } else if (category === "eating out"){
      id = eatingOut.length
      setEatingOut([...eatingOut, {id: id, name:name, amount:amount}])
    } else if (category === "misc"){
      id = misc.length
      setMisc([...misc, {id: id, name:name, amount:amount}]);
    } else if (category === "gas"){
      id = gas.length
      setGas([...gas, {id: id, name:name, amount:amount}])
    } else if (category === "groceries"){
      id = groceries.length
      setGroceries([...groceries, {id: id, name:name, amount:amount}])
    }
    /*switch(category) {
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
          
    }*/
    
    

  }
  
  
  return (
    <div className="App">
      <Header />
      <div className='row'>
        <div className='col-6'>
          <CategoryDrop onIncomeChange={incomeChange} onIncomeLocal={incomeLocal} onCategoryChange={handleCategoryChange} income={income} categorys={categorys} category={category}></CategoryDrop>
        </div>
        <div className='col-4' style={{marginTop: 60}}>
          <button className='btn btn-primary' onClick={handleShowTotal}>View Category totals</button>
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

// try saving data to JSON then saving entire JSON to localStorage!!

// add X on totals popup 