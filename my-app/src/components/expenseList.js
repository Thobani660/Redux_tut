import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../app/expenceSlice"; // Ensure the path is correct

function ExpenseList() {
  const { expenses, totalIncome, totalExpense } = useSelector(
    (state) => state.expense
  ); // Assuming you have totalIncome and totalExpense in the state
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  // Inline styles for card layout
  const cardStyle = {
    width: "400px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "space-between",
  };

  const deleteButtonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 8px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
  };

  const netProfitStyle = {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px",
    color: totalIncome - totalExpense >= 0 ? "black" : "white", // Text color is white for contrast
    backgroundColor:
      totalIncome - totalExpense >= 0 ? "rgba(0, 128, 0, 0.356)" : "red", // Background changes based on profit
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
  };

  return (
    <div>
      <div>
        <div style={cardStyle}>
        <h1>Expense List</h1>

          {expenses.map((item) => (
            
          <ul key={item.id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
        <li style={{ listStyle: "none" }}>
          <h4>{item.expenseItem}</h4>
        </li>
        {/* Adding type next to the price */}
        <p style={{ marginLeft: "44px" }}>
          R{item.amount.toFixed(2)} ({item.budgetType})
        </p>
        <button onClick={() => handleDelete(item.id)} style={deleteButtonStyle}>
          Delete
        </button>
      </div>
          </ul>
          ))}
          
          <div style={netProfitStyle}>
            Net Profit: $
            {totalIncome - totalExpense >= 0
              ? (totalIncome - totalExpense).toFixed(2)
              : (totalIncome - totalExpense).toFixed(2)}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ExpenseList;
