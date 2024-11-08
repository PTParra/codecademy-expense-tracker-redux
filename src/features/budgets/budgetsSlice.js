import { createSlice } from "@reduxjs/toolkit";



export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));


export const selectBudgets = (state) => state.budgets;

export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      state = state.forEach((budget) => {
        if (budget.category === action.payload.category) {
          budget.amount = action.payload.amount;
        }
      })
    }
  },
})

export const { editBudget } = budgetsSlice.actions;