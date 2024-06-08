import { LoginProps, ErrorProps, UserProps } from "../types";
import api from "./api";

class User {
  async login(
    mail: string,
    password: string
  ): Promise<LoginProps | ErrorProps> {
    try {
      const { data } = await api.post("/login", { mail, password });
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  async create(
    mail: string,
    password: string
  ): Promise<LoginProps | ErrorProps> {
    try {
      const { data } = await api.post("/usuario", { mail, password });
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  async list(): Promise<UserProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/usuario");
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }

  async updateProfile(
    id: string,
    profile: string
  ): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/usuario/perfil", { id, profile });
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }
}

const user = new User();
export default user;
