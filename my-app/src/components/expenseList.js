import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../app/expenceSlice"; // Make sure the path is correct

function ExpenseList() {
    const { expenses } = useSelector((state) => state.expense);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteExpense(id)); 
    };

    // Inline styles for card layout
    const cardStyle = {
        width: '200px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    const deleteButtonStyle = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '5px 8px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        marginTop: '10px',
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {expenses.map((item) => (
                <div key={item.id} style={cardStyle}>
            <h3>Expense List</h3>

                    <h4>{item.expenseItem}</h4>
                    <p>Amount: ${item.amount.toFixed(2)}</p>
                    <button onClick={() => handleDelete(item.id)} style={deleteButtonStyle}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ExpenseList;
