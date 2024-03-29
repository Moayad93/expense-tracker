import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [],
  // transactions: [
  //   { id: 1, text: 'Flower', amount: -20 },
  //   { id: 2, text: 'Salary', amount: 300 },
  //   { id: 3, text: 'Book', amount: -10 },
  //   { id: 4, text: 'Camera', amount: 150 },
  //   { id: 5, text: 'PS5', amount: 0 },
  // ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}