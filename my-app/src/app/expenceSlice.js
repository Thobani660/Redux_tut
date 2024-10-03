import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
  totalIncome: 0,
  totalExpense: 0,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
      if (action.payload.budgetType === 'Income') {
        state.totalIncome += action.payload.amount;
      } else {
        state.totalExpense += action.payload.amount;
      }
    },
    deleteExpense: (state, action) => {
      const expenseIndex = state.expenses.findIndex(
        (expense) => expense.id === action.payload
      );
      if (expenseIndex !== -1) {
        const deletedExpense = state.expenses[expenseIndex];
        // Adjust totalIncome or totalExpense based on the type
        if (deletedExpense.budgetType === 'Income') {
          state.totalIncome -= deletedExpense.amount;
        } else {
          state.totalExpense -= deletedExpense.amount;
        }
        state.expenses.splice(expenseIndex, 1); // Remove the expense
      }
    },
  },
});

export const { addExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
