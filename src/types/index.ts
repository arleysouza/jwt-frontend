import { ReactNode } from "react";

export interface UserContextProps {
  users: UserProps[] | null;
  mail: string | null;
  profile: string | null;
  token: string | null;
  login: (mail: string, password: string) => void;
  logout: () => void;
  create: (mail: string, password: string) => void;
  getUsers: () => void;
  updateProfile: (id: string, profile: string) => void;
  error: ErrorProps | null;
  setError: (error: ErrorProps | null) => void;
  isErrorProps: (object: any) => object is ErrorProps;
}

export interface CategoryContextProps {
  categories: CategoryProps[];
  create: (name: string) => void;
  remove: (id: string) => void;
  update: (id: string, name: string) => void;
  getCategoryById: (id:string) => CategoryProps | null;
  error: ErrorProps | null;
  setError: (error: ErrorProps | null) => void;
  isErrorProps: (object: any) => object is ErrorProps;
}

export interface ProductContextProps {
  products: ProductProps[];
  create: (category:string, name: string) => void;
  update: (id:string, category:string, name: string) => void;
  remove: (id: string) => void;
  error: ErrorProps | null;
  setError: (error: ErrorProps | null) => void;
  isErrorProps: (object: any) => object is ErrorProps;
}

export interface SpentContextProps {
  expenses: ExpenseProps[];
  error: ErrorProps | null;
  setError: (error: ErrorProps | null) => void;
  isErrorProps: (object: any) => object is ErrorProps;
}

export interface ErrorProps {
  message: string;
}

export interface CategoryProps {
  id: string;
  name: string;
}

export interface ProductProps {
  id: string;
  name: string;
  category: string;
}

export interface LoginProps {
  mail: string;
  profile: string;
  token: string;
}

export interface UserProps {
  id: string;
  mail: string;
  profile: string;
}

export interface ExpenseProps {
  id: string;
  idproduct: string;
  name: string;
  value: number;
  datetime: string;
}

export interface ProviderProps {
  children: ReactNode;
}
