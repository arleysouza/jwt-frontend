import { CategoryProps, ErrorProps } from "../types";
import api from "./api";

class Category {
  async list(): Promise<CategoryProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/categoria");
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  async create(name: string): Promise<CategoryProps[] | ErrorProps> {
    try {
      const { data } = await api.post("/categoria", { name });
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  async delete(id: string): Promise<CategoryProps | ErrorProps> {
    try {
      // No Axios o método HTTP DELETE não aceita passar parâmetros pelo body
      const { data } = await api.delete(`/categoria/${id}`);
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  async update(id: string, name: string): Promise<CategoryProps | ErrorProps> {
    try {
      const { data } = await api.put("/categoria", { id, name });
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }
}

const category = new Category();
export default category;
