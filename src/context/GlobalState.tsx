import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { TransactionsType, InitialStateType, ContextType } from "../types/Types";

// Initial State
const initialState: InitialStateType = {
  // Dummy Transactions Used at initial States
  transactions: [
    // { id: 1, description: "Flower", amount: -20 },
    // { id: 2, description: "Salary", amount: 300 },
    // { id: 3, description: "Book", amount: -10 },
    // { id: 4, description: "Camera", amount: -150 },
  ],
};

// Create Global Context
export const GlobalContext = createContext<Partial<ContextType>>(initialState);

// Provider Component

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // Delete A Transaction
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  // Add a Transaction
  function addTransaction(transaction: TransactionsType) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
