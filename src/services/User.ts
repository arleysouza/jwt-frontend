import { UserProps, ErrorProps } from "../types";
import api from "./api";

class User {
  async login(mail:string,password:string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.post("/login", {mail,password});
      return data;
    } catch (error: any) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        return { message: `Falha: ${error.response.status} - ${error.response.statusText}` };
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        return { message: "O servidor não está acessível" };
      } else {
        return { message: error.message };
      }
    }
  }

  async create(mail:string,password:string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.post("/usuario", {mail,password});
      return data;
    } catch (error: any) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        return { message: `Falha: ${error.response.status} - ${error.response.statusText}` };
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        return { message: "O servidor não está acessível" };
      } else {
        return { message: error.message };
      }
    }
  }
}

const user = new User();
export default user;
