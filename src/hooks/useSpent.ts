import { useContext } from "react";
import { ExpenseContext } from "../contexts";

export default function useExpense(){
    const context = useContext(ExpenseContext);
    if (!context) {
      throw new Error("O hook useSpent deve ser chamado dentro do contexto delimitado por SpentContext");
    }
    return context;
}