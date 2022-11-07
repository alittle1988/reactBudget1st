import './App.css';
import Header from "./Header.js";
import CategoryDrop from "./CategoryDrop.js";
import CategorysInput from "./CategorysInput.js";
import ExpenseTable from "./ExpenseTable.js";
import TipsTable from './TipsTable.js';
import IncomeTable from "./IncomeTable.js"
import CategoryDropInput from './CategoryDropInput';



function App() {
  
  return (
    <div className="App">
      <Header />
      <CategoryDrop></CategoryDrop>
     
      <div className='tableDiv'>
        <ExpenseTable></ExpenseTable>
        <IncomeTable></IncomeTable>
        <TipsTable></TipsTable>
      </div>
    </div>
  );
};

export default App;
