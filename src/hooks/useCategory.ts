import { useContext } from "react";
import { CategoryContext } from "../contexts";

export default function useCategory(){
    const context = useContext(CategoryContext);
    if (!context) {
      throw new Error("O hook useCategory deve ser chamado dentro do contexto delimitado por CategoryContext");
    }
    return context;
}