import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TransactionsType } from "../types/Types";

type TransactionCompType = {
  transaction: TransactionsType;
};

export const Transaction: React.FC<TransactionCompType> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.description}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction && deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
};
