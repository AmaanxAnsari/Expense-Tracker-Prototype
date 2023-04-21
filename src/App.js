import './App.css'
import Display from './components/Display/Display';
import { useState } from 'react';

function App() {

  const expense = [
    {
      id: "e1",
      name: "Phone",
      price: 35000,
      category: "Electronics",
      date: "2023-3-28",
    },
    {
      id: "e2",
      name: "Vegetables",
      price: 3000,
      category: "Grocery",
      date: "2023-3-28"
    },
    {
      id: "e3",
      name: "Clothes",
      price: 5000,
      category: "Aparrels",
      date: "2023-3-28",
    }
  ];
  const [expenses, setExpenses] = useState(expense);
  const AppExpense = (newExpenses) => {
    setExpenses((prevState) => {
      return [newExpenses, ...prevState]
    })

    console.log("AppExpense:", newExpenses)
  }

  return (
    <div className="App">
      <h1 className='mt-5 display-3 text-center fw-bold '>Expense Tracker</h1>
      <Display data={expenses} addNewExpense={AppExpense} />
    </div>
  );
}

export default App;
