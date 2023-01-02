import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./Header.js";
import CategoryDrop from "./CategoryDrop.js";
import Tables from "./Tables.js";
import Totals from "./Totals.js";

const categorys = [
  "Income",
  "Tips",
  "Expenses",
  "Myself",
  "Eating Out",
  "Misc",
  "Gas",
  "Groceries",
];
const years = [];
for (let i = 2020; i < 2031; i++) {
  years.push(i);
}
const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  const [category, setCategory] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(() => {
    const data = JSON.parse(localStorage.getItem("month"));

    return data || months[new Date().getMonth()];
  });
  const [yearData, setYearData] = useState(() => {
    const data = JSON.parse(localStorage.getItem(year));

    return (
      data || {
        january: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        feburary: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        march: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        april: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        may: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        june: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        july: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        august: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        september: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        october: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        november: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
        december: {
          income: [],
          tips: [],
          expenses: [],
          myself: [],
          eatingOut: [],
          misc: [],
          gas: [],
          groceries: [],
        },
      }
    );
  });
  const [income, setIncome] = useState(() => {
    const data = JSON.parse(localStorage.getItem("income"));
    return data || [];
  });
  const [tips, setTips] = useState(() => {
    const data = JSON.parse(localStorage.getItem("tips"));
    return data || [];
  });
  const [expenses, setExpenses] = useState(() => {
    const data = JSON.parse(localStorage.getItem("expenses"));
    return data || [];
  });
  const [myself, setMyself] = useState(() => {
    const data = JSON.parse(localStorage.getItem("myself"));
    return data || [];
  });
  const [eatingOut, setEatingOut] = useState(() => {
    const data = JSON.parse(localStorage.getItem("eatingOut"));
    return data || [];
  });
  const [misc, setMisc] = useState(() => {
    const data = JSON.parse(localStorage.getItem("misc"));
    return data || [];
  });
  const [gas, setGas] = useState(() => {
    const data = JSON.parse(localStorage.getItem("gas"));
    return data || [];
  });
  const [groceries, setGroceries] = useState(() => {
    const data = JSON.parse(localStorage.getItem("groceries"));
    return data || [];
  });
  const [showTotals, setShowTotals] = useState(false);

  // updates localStorage
  useEffect(() => {
    localStorage.setItem(year, JSON.stringify(yearData));
    localStorage.setItem("month", JSON.stringify(month));
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("tips", JSON.stringify(tips));
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("myself", JSON.stringify(myself));
    localStorage.setItem("eating out", JSON.stringify(eatingOut));
    localStorage.setItem("misc", JSON.stringify(misc));
    localStorage.setItem("gas", JSON.stringify(gas));
    localStorage.setItem("groceries", JSON.stringify(groceries));
  }, [
    income,
    tips,
    expenses,
    myself,
    eatingOut,
    misc,
    gas,
    groceries,
    yearData,
    month,
  ]);
  console.log(income);
  const editYearData = (month, category, name, amount) => {
    const newYearData = { ...yearData };
    let id = 0;
    switch (month) {
      case "January":
        switch (category) {
          case "income":
            id = newYearData.january.income.length;
            console.log(id);
            newYearData.january.income.push({
              id: id,
              name: name,
              amount: amount,
              date: new Date(),
            });
            break;
          case "tips":
            id = newYearData.january.tips.length;
            newYearData.january.tips.push({
              id: id,
              name: name,
              amount: amount,
              date: new Date(),
            });
            break;
          case "expenses":
            id = newYearData.january.expenses.length;
            newYearData.january.expenses.push({
              id: id,
              name: name,
              amount: amount,
              date: new Date(),
            });
            break;
          case "myself":
            id = newYearData.january.myself.length;
            newYearData.january.myself.push({
              id: id,
              name: name,
              amount: amount,
              date: new Date(),
            });
            break;
          case "eating out":
            id = newYearData.january.eatingOut.length;
            newYearData.january.eatingOut.push({
              id: id,
              name: name,
              amount: amount,
              date: new Date(),
            });
            break;
          case "misc":
            id = newYearData.january.misc.length;
            newYearData.january.misc.push({
              id: id,
              name: name,
              amount: amount,
              date: new Date(),
            });
            break;
          case "gas":
            id = newYearData.january.gas.length;
            newYearData.january.gas.push({
              id: id,
              name: name,
              amount: amount,
              date: new Date(),
            });
            break;
          case "groceries":
            id = newYearData.january.groceries.length;
            newYearData.january.groceries.push({
              id: id,
              name: name,
              amount: amount,
              date: new Date(),
            });
            break;
          default:
            alert("No category selected");
        }
        break;
      default:
        alert("No month selected");
    }
    setYearData(newYearData);
  };

  // handle year change
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  // handles month change
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  // handles showtotal true/false
  const handleShowTotal = () => {
    setShowTotals(!showTotals);
  };

  //handles changing Category for dropdown
  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  // adds new data to specific list
  function incomeChange(category, name, amount) {
    let id = 0;
    if (category === "income") {
      id = income.length;
      setIncome([
        ...income,
        { id: id, name: name, amount: amount, date: new Date() },
      ]);
    } else if (category === "tips") {
      id = tips.length;
      setTips([
        ...tips,
        { id: id, name: name, amount: amount, date: new Date() },
      ]);
    } else if (category === "expenses") {
      id = expenses.length;
      setExpenses([
        ...expenses,
        { id: id, name: name, amount: amount, date: new Date() },
      ]);
    } else if (category === "myself") {
      id = myself.length;
      setMyself([
        ...myself,
        { id: id, name: name, amount: amount, date: new Date() },
      ]);
    } else if (category === "eating out") {
      id = eatingOut.length;
      setEatingOut([
        ...eatingOut,
        { id: id, name: name, amount: amount, date: new Date() },
      ]);
    } else if (category === "misc") {
      id = misc.length;
      setMisc([
        ...misc,
        { id: id, name: name, amount: amount, date: new Date() },
      ]);
    } else if (category === "gas") {
      id = gas.length;
      setGas([
        ...gas,
        { id: id, name: name, amount: amount, date: new Date() },
      ]);
    } else if (category === "groceries") {
      id = groceries.length;
      setGroceries([
        ...groceries,
        { id: id, name: name, amount: amount, date: new Date() },
      ]);
    } else {
      alert("Fail");
    }
  }
  // handles removing data from state arrays
  const handleCellDeleteBtn = (array, item, title) => {
    const list = [...array];
    list.forEach((index) => {
      if (index.name === item.name) {
        const a = list.indexOf(index);
        list.splice(a, 1);
        let id = 0;
        list.forEach((item) => {
          item.id = id;
          id++;
        });
        switch (title) {
          case "Income":
            setIncome(list);
            break;
          case "Tips":
            setTips(list);
            break;
          case "Expenses":
            setExpenses(list);
            break;
          case "Myself":
            setMyself(list);
            break;
          case "Eating Out":
            setEatingOut(list);
            break;
          case "Misc":
            setMisc(list);
            break;
          case "Gas":
            setGas(list);
            break;
          case "Groceries":
            setGroceries(list);
            break;
          default:
            alert("You lose the Game");
            break;
        }
      }
    });
  };

  return (
    <div className="App">
      <Header
        year={year}
        years={years}
        months={months}
        month={month}
        onYearChange={handleYearChange}
        onMonthChange={handleMonthChange}
        onEditYearData={editYearData}
      />
      <Container>
        <div className="row">
          <div className="col-md-6">
            <CategoryDrop
              onIncomeChange={incomeChange}
              onEditYearData={editYearData}
              onCategoryChange={handleCategoryChange}
              income={income}
              categorys={categorys}
              category={category}
              month={month}
            ></CategoryDrop>
          </div>
          <div className="col-4" style={{ marginTop: 60 }}>
            <button className="btn btn-primary" onClick={handleShowTotal}>
              View Category totals
            </button>
          </div>
        </div>
      </Container>
      {showTotals === true ? (
        <Totals
          categorys={categorys}
          income={income}
          tips={tips}
          expenses={expenses}
          myself={myself}
          eatingOut={eatingOut}
          misc={misc}
          gas={gas}
          groceries={groceries}
          onShowTotal={handleShowTotal}
        />
      ) : (
        <div></div>
      )}

      <Container className="tableContainer">
        <h1 className="tableContainerH1">Tables</h1>
        {income.length > 0 ? (
          <Tables
            title={categorys[0]}
            array={income}
            onCellDeleteBtn={handleCellDeleteBtn}
          />
        ) : (
          <div></div>
        )}
        {tips.length > 0 ? (
          <Tables
            title={categorys[1]}
            array={tips}
            onCellDeleteBtn={handleCellDeleteBtn}
          />
        ) : (
          <div></div>
        )}
        {expenses.length > 0 ? (
          <Tables
            title={categorys[2]}
            array={expenses}
            onCellDeleteBtn={handleCellDeleteBtn}
          />
        ) : (
          <div></div>
        )}
        {myself.length > 0 ? (
          <Tables
            title={categorys[3]}
            array={myself}
            onCellDeleteBtn={handleCellDeleteBtn}
          />
        ) : (
          <div></div>
        )}
        {eatingOut.length > 0 ? (
          <Tables
            title={categorys[4]}
            array={eatingOut}
            onCellDeleteBtn={handleCellDeleteBtn}
          />
        ) : (
          <div></div>
        )}
        {misc.length > 0 ? (
          <Tables
            title={categorys[5]}
            array={misc}
            onCellDeleteBtn={handleCellDeleteBtn}
          />
        ) : (
          <div></div>
        )}
        {gas.length > 0 ? (
          <Tables
            title={categorys[6]}
            array={gas}
            onCellDeleteBtn={handleCellDeleteBtn}
          />
        ) : (
          <div></div>
        )}
        {groceries.length > 0 ? (
          <Tables
            title={categorys[7]}
            array={groceries}
            onCellDeleteBtn={handleCellDeleteBtn}
          />
        ) : (
          <div></div>
        )}
      </Container>
    </div>
  );
}

export default App;

// finishing edityear function for the rest of the months!
// dont forget to try for loop to set data in edit year function 
