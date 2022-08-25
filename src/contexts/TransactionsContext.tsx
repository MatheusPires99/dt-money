import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
};

type TransactionsContextData = {
  transactions: Transaction[];
};

const TransactionsContext = createContext({} as TransactionsContextData);

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  console.log(transactions);

  const loadTransactions = async () => {
    const reponse = await fetch("http://localhost:3333/transactions");
    const data = await reponse.json();

    setTransactions(data);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionsContext);
};
