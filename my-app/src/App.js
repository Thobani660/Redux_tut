import './App.css';
import ExpensesForm from './components/expenseForm';
import ExpenseList from './components/expenseList';

function App() {

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Budget tracker</h1>
      <ExpensesForm/>
      <ExpenseList/>
    </div>
  );
}

export default App;
