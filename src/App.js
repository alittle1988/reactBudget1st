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
  const [expenses, setExpenses] = useState(() => {
    const data = localStorage.getItem("expenses");
    const theData = JSON.parse(data);
    return theData || [];
  });
  const [myself, setMyself] = useState(() => {
    const data = localStorage.getItem("myself");
    const theData = JSON.parse(data);
    return theData || [];
  });
  const [eatingOut, setEatingOut] = useState(() => {
    const data = localStorage.getItem("eatingOut");
    const theData = JSON.parse(data);
    return theData || [];
  });
  const [misc, setMisc] = useState(() => {
    const data = localStorage.getItem("misc");
    const theData = JSON.parse(data);
    return theData || [];
  });
  const [gas, setGas] = useState(() => {
    const data = localStorage.getItem("gas");
    const theData = JSON.parse(data);
    return theData || [];
  });
  const [groceries, setGroceries] = useState(() => {
    const data = localStorage.getItem("groceries");
    const theData = JSON.parse(data);
    return theData || [];
  });
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
  

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }
  // adds new data to specific list
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

  }

  const handleCellDeleteBtn = (array, item, title) => {
    const list = [...array];
    list.forEach((index) => {
      if(index.name === item.name) {
        const a = list.indexOf(index);
        list.splice(a, 1);
        let id = 0;
        list.forEach((item) => {
          item.id = id;
          id++

        })
        switch(title) {
          case "Income":
            setIncome(list)
            break;
          case "Tips":
            setTips(list)
            break;
        }
      }
    })
    
  }
  
  
  return (
    <div className="App">
      <Header />
      <div className='row'>
        <div className='col-6'>
          <CategoryDrop onIncomeChange={incomeChange} onCategoryChange={handleCategoryChange} income={income} categorys={categorys} category={category}></CategoryDrop>
        </div>
        <div className='col-4' style={{marginTop: 60}}>
          <button className='btn btn-primary' onClick={handleShowTotal}>View Category totals</button>
        </div>
      </div>
      {showTotals === true ? <Totals categorys={categorys} income={income} tips={tips} expenses={expenses} myself={myself} eatingOut={eatingOut} misc={misc} gas={gas} groceries={groceries} onShowTotal={handleShowTotal} /> : <div></div>}
      
      <Container className='tableContainer'>
        <h1 className='tableContainerH1'>Tables</h1>
        {income.length > 0 ? <Tables title={categorys[0]} array={income} onCellDeleteBtn={handleCellDeleteBtn} /> : <div></div>}
        {tips.length > 0 ? <Tables title={categorys[1]} array={tips} onCellDeleteBtn={handleCellDeleteBtn} /> : <div></div>}
        {expenses.length > 0 ? <Tables title={categorys[2]} array={expenses} onCellDeleteBtn={handleCellDeleteBtn} /> : <div></div>}
        {myself.length > 0 ? <Tables title={categorys[3]} array={myself} onCellDeleteBtn={handleCellDeleteBtn} /> : <div></div>}
        {eatingOut.length > 0 ? <Tables title={categorys[4]} array={eatingOut} onCellDeleteBtn={handleCellDeleteBtn} /> : <div></div>}
        {misc.length > 0 ? <Tables title={categorys[5]} array={misc} onCellDeleteBtn={handleCellDeleteBtn} /> : <div></div> }
        {gas.length > 0 ? <Tables title={categorys[6]} array={gas} onCellDeleteBtn={handleCellDeleteBtn} /> : <div></div> }
        {groceries.length > 0 ? <Tables title={categorys[7]} array={groceries} onCellDeleteBtn={handleCellDeleteBtn} /> : <div></div>}
          
      </Container>
    </div>
  );
};

export default App;


/// left off trying to store and array of objects in local storage named by category!

// try saving data to JSON then saving entire JSON to localStorage!!

// add X on totals popup 