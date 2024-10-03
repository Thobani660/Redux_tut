import { addExpense } from "../app/expenceSlice";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector to access state
import { useState } from "react";

function ExpensesForm() {
    const dispatch = useDispatch();
    const { totalExpense, totalIncome } = useSelector((state) => state.expense); // Access totalExpense and totalIncome from Redux state

    const [expenseItem, setExpenseItem] = useState('');
    const [amount, setAmount] = useState('');
    const [budgetType, setBudgetType] = useState('');

    const handleAddExpense = () => {
        const expense = {
            id: Date.now(),
            expenseItem: expenseItem,
            amount: parseFloat(amount),
            budgetType: budgetType,
        };
        dispatch(addExpense(expense));
        
        // Clear input fields after submission
        setExpenseItem('');
        setAmount('');
        setBudgetType('');
    };

    // Inline styles for the form container and inputs
    const formStyle = {
        marginTop:"10px",
        width: '400px',
        height: '250px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative', // Position relative to allow absolute positioning of totals
    };

    const inputStyle = {
        marginTop:"15px",

        padding: '10px',
        marginBottom: '-15px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
    };

    const buttonStyle = {
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    // Styles for total amounts
    const totalStyle = {
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'red', // Color for total expenses
    };

    const totalIncomeStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'green', // Color for total income
    };

    return (
        <div style={formStyle}>
            <div style={totalStyle}>Total Expense: ${totalExpense.toFixed(2)}</div>
            <div style={totalIncomeStyle}>Total Income: ${totalIncome.toFixed(2)}</div>
            <input 
                type="text" 
                placeholder="Enter expense" 
                value={expenseItem} 
                onChange={(e) => setExpenseItem(e.target.value)} 
                style={inputStyle}
            />
            <input 
                type="number" 
                placeholder="Enter amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                style={inputStyle}
            />
            <select 
                onChange={(e) => setBudgetType(e.target.value)} 
                style={inputStyle}
                value={budgetType}
            >
                <option value="">Select Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            <button onClick={handleAddExpense} style={buttonStyle}>
                Add
            </button>
        </div>
    );
}

export default ExpensesForm;
