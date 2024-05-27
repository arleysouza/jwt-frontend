import { createContext, useState } from "react";
import {
  UserContextProps,
  ProviderProps
} from "../types";
import { User } from "../services";
import { useError } from "../hooks";

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({ children }: ProviderProps) {
  const [mail, setMail] = useState<string | null>(null);
  const [profile, setProfile] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const {setError, isErrorProps } = useError();

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
  };

  return (
    <UserContext.Provider
      value={{ mail, profile, token, login, logout, create }}
    >
      {children}
    </UserContext.Provider>
  );
}
