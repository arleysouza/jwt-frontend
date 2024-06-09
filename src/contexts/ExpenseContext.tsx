import { createContext, useCallback, useEffect, useState } from "react";
import {
  ProviderProps,
  SpentContextProps,
  ExpenseProps,
  ErrorProps
} from "../types";
import { Expense } from "../services";

export const ExpenseContext = createContext({} as SpentContextProps);

export function ExpenseProvider({ children }: ProviderProps) {
  const [expenses, setExpenses] = useState([] as ExpenseProps[]);
  const [error, setError] = useState<ErrorProps | null>(null);
  // verifica se o objeto é do tipo ErrorProps
  const isErrorProps = (object: any): object is ErrorProps => "message" in object;

  /*
  useCallback ajuda a garantir que a função não seja recriada em cada 
  renderização, evitando assim loops infinitos
  */
  const getSpents = useCallback(async () => {
    const response = await Expense.list();

    if (!isErrorProps(response)) {
      setExpenses(response);
    }
    else{
      setError(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getSpents();
  }, [getSpents]);


  return (
    <ExpenseContext.Provider value={{ expenses, error, setError, isErrorProps }}>
      {children}
    </ExpenseContext.Provider>
  );
}
