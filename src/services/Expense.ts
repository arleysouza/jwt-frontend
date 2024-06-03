import { ErrorProps, ExpenseProps } from "../types";
import api from "./api";

class Expense {
  async list(): Promise<ExpenseProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/gasto");
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }
}

const expense = new Expense();
export default expense;
