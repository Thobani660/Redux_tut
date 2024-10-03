import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenses: [],
    totalExpense: 0,
    totalIncome: 0,
  },

  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);

      if (action.payload.budgetType === "Income") {
        state.totalIncome += action.payload.amount;
      } else {
        state.totalExpense += action.payload.amount;
      }
    },
    deleteExpense: ()=>{

    }
  },
});

export const {addExpense , deleteExpense} = expenseSlice.actions
export default expenseSlice.reducer ;
