import { ReactNode } from "react";

export interface ErrorContextProps {
  error: ErrorProps | null;
  setError: (error:ErrorProps | null) => void;
  isErrorProps: (object: any) => object is ErrorProps;
}

export interface UserContextProps {
  mail: string | null;
  profile: string | null;
  token: string | null;
  login: (mail:string,password:string) => void;
  logout: () => void;
  create: (mail:string,password:string) => void;
}

export interface CategoryContextProps {
  categories: CategoryProps[];
  getCategories: () => void;
  create: (name:string) => void;
}

export interface ErrorProps {
  message: string;
}

export interface CategoryProps {
  id: number;
  name: string;
}

export interface UserProps {
  mail: string;
  profile: string;
  token: string;
}

export interface ProviderProps {
  children: ReactNode;
}
