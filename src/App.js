import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from "./Header.js";
import CategoryDrop from "./CategoryDrop.js";
import Tables from "./Tables.js";



function App() {
  
  
  return (
    <div className="App">
      <Header />
      <CategoryDrop></CategoryDrop>
     
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
