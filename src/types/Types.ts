export type TransactionsType = { id: number; description: string; amount: number };

export type ContextType = {
  transactions: TransactionsType[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: TransactionsType) => void;
};

export type InitialStateType = { transactions: TransactionsType[] };