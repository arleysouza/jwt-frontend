import { ErrorProps, ProductProps } from "../types";
import api from "./api";

class Product {
  async list(): Promise<ProductProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/produto");
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  async create(category:string, name: string): Promise<ProductProps[] | ErrorProps> {
    try {
      const { data } = await api.post("/produto", { category, name });
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  async delete(id: string): Promise<ProductProps | ErrorProps> {
    try {
      // No Axios o método HTTP DELETE não aceita passar parâmetros pelo body
      const { data } = await api.delete(`/produto/${id}`);
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  async update(id: string, category:string, name: string): Promise<ProductProps | ErrorProps> {
    try {
      const { data } = await api.put("/produto", { id, category, name });
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }
}

const product = new Product();
export default product;
