import { useContext } from "react";
import { ErrorContext } from "../contexts";

export default function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("O hook useError deve ser chamado dentro do contexto delimitado por ErrorProvider");
  }
  return context;
}
