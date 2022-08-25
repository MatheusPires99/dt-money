import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../lib/api";

export type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
};

type CreateTransactionData = Pick<
  Transaction,
  "description" | "type" | "category" | "price"
>;

type TransactionsContextData = {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: CreateTransactionData) => Promise<void>;
};

const TransactionsContext = createContext({} as TransactionsContextData);

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(
    async (transaction: CreateTransactionData) => {
      const { description, price, category, type } = transaction;

      const response = await api.post("/transactions", {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      });

      const newTransaction = response.data;
      setTransactions((state) => [newTransaction, ...state]);
    },
    [],
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionsContext);
};
