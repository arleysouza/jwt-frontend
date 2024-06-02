import { createContext, useState } from "react";
import { ErrorContextProps, ErrorProps, ProviderProps } from "../types";

export const ErrorContext = createContext({} as ErrorContextProps);

export function ErrorProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);

  // verifica se o objeto é do tipo ErrorProps
  const isErrorProps = (object: any): object is ErrorProps => "message" in object;

  return (
    <ErrorContext.Provider value={{ error, setError, isErrorProps }}>
      {children}
    </ErrorContext.Provider>
  );
}
