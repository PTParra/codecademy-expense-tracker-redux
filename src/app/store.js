import { configureStore } from '@reduxjs/toolkit';
import { budgetsSlice } from '../features/budgets/budgetsSlice';
import { transactionsSlice } from '../features/transactions/transactionsSlice'

export default configureStore({
  reducer: {
    transactions: transactionsSlice.reducer,
    budgets: budgetsSlice.reducer,
  },
});
