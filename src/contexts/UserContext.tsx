import { createContext, useEffect, useState } from "react";
import {
  UserContextProps,
  ProviderProps,
  ErrorProps,
  UserProps,
} from "../types";
import { User } from "../services";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);
  const [users, setUsers] = useState<UserProps[] | null>(null);
  const [mail, setMail] = useState<string | null>(null);
  const [profile, setProfile] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  // verifica se o objeto é do tipo ErrorProps
  const isErrorProps = (object: any): object is ErrorProps => "message" in object;

  // Carrega as propriedades se elas estiverem salvas no localStorage
  useEffect(() => {
    console.log("antes");
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("mail") &&
      localStorage.getItem("profile")
    ) {
      setToken(localStorage.getItem("token"));
      setMail(localStorage.getItem("mail"));
      setProfile(localStorage.getItem("profile"));
    }
  }, []); // Dependência vazia para garantir que seja executado apenas na montagem

  const login = async (mail: string, password: string) => {
    const response = await User.login(mail, password);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      setMail(response.mail);
      setProfile(response.profile);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      localStorage.setItem("mail", response.mail);
      localStorage.setItem("profile", response.profile);
      navigate("/"); // Navega para a página inicial após o login
    }
  };

  const create = async (mail: string, password: string) => {
    const response = await User.create(mail, password);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      setMail(response.mail);
      setProfile(response.profile);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      localStorage.setItem("mail", response.mail);
      localStorage.setItem("profile", response.profile);
      navigate("/"); // Navega para a página inicial após a criação do usuário
    }
  };

  const logout = () => {
    setError(null);
    setMail(null);
    setProfile(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("mail");
    localStorage.removeItem("profile");
    navigate("/login"); // Navega para a página de login após o logout
  };

  const getUsers = async () => {
    const response = await User.list();
    if (!isErrorProps(response)) {
      setUsers(response);
    }
    else{
      setError(response);
    }
  };

  const updateProfile = async (id: string, profile: string) => {
    const response = await User.updateProfile(id, profile);
    if (!isErrorProps(response)) {
      getUsers();
    } else {
      setError(response);
    }
  };

  return (
    <UserContext.Provider
      value={{ users, mail, profile, token, login, logout, create, getUsers, updateProfile, error, setError, isErrorProps }}
    >
      {children}
    </UserContext.Provider>
  );
}
