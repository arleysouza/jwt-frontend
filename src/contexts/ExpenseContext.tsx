import { createContext, useCallback, useEffect, useState } from "react";
import {
  ProviderProps,
  SpentContextProps,
  ExpenseProps
} from "../types";
import { Expense } from "../services";
import { useError } from "../hooks";

export const ExpenseContext = createContext({} as SpentContextProps);

export function ExpenseProvider({ children }: ProviderProps) {
  const [expenses, setExpenses] = useState([] as ExpenseProps[]);
  const {isErrorProps} = useError();

  /*
  useCallback ajuda a garantir que a função não seja recriada em cada 
  renderização, evitando assim loops infinitos
  */
  const getSpents = useCallback(async () => {
    const response = await Expense.list();
    if (!isErrorProps(response)) {
      setExpenses(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getSpents();
  }, [getSpents]);


  return (
    <ExpenseContext.Provider value={{ expenses }}>
      {children}
    </ExpenseContext.Provider>
  );
}
