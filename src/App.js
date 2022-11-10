import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from "./Header.js";
import CategoryDrop from "./CategoryDrop.js";
import Tables from "./Tables.js";


const categorys = ["Income", "Tips", "Expenses", "Myself", "Eating Out", "Misc", "Gas", "Groceries"]


function App() {
  const [category, setCategory] = useState("");

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }
  
  
  return (
    <div className="App">
      <Header />
      <CategoryDrop onCategoryChange={handleCategoryChange} categorys={categorys} category={category}></CategoryDrop>
     
      <Container className='tableContainer'>
          <Tables title="Income" />
          <Tables title="Tips"  />
          <Tables title="Expenses"  />
          <Tables title="Myself" />
          <Tables title="Eating out" />
          <Tables title="Misc" />
          <Tables title="Gas" />
          <Tables title="Groceries" />
      </Container>
    </div>
  );
};

export default App;
