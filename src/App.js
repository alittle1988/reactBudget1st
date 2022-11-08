import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Header.js";
import CategoryDrop from "./CategoryDrop.js";
import Tables from "./Tables.js";



function App() {
  const {income, setIncome} = useState()
  
  return (
    <div className="App">
      <Header />
      <CategoryDrop></CategoryDrop>
     
      <div className='tableDiv'>
        <Tables title="Income" />
        <Tables title="Tips"  />
        <Tables title="Expenses"  />
        <Tables title="Myself" />
        <Tables title="Eating out" />
        <Tables title="Misc" />
        <Tables title="Gas" />
        <Tables title="Groceries" />
      </div>
    </div>
  );
};

export default App;
