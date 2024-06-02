import { useContext } from "react";
import { ProductContext } from "../contexts";

export default function useProduct(){
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error("O hook useProduct deve ser chamado dentro do contexto delimitado por ProductContext");
    }
    return context;
}