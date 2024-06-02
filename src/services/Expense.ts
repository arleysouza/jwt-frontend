import { CategoryProps, ErrorProps, ExpenseProps } from "../types";
import api from "./api";

class Expense {
  async list(): Promise<ExpenseProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/gasto");
      return data;
    } catch (error: any) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        return {
          message: `Falha: ${error.response.status} - ${error.response.statusText}`,
        };
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        return { message: "O servidor não está acessível" };
      } else {
        return { message: error.message };
      }
    }
  }

  
}

const expense = new Expense();
export default expense;
