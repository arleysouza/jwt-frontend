import { createContext, useCallback, useEffect, useState } from "react";
import {
  CategoryProps,
  CategoryContextProps,
  ProviderProps,
} from "../types";
import { Category } from "../services";
import { useError  } from "../hooks";

export const CategoryContext = createContext({} as CategoryContextProps);

export function CategoryProvider({ children }: ProviderProps) {
  const [categories, setCategories] = useState([] as CategoryProps[]);
  const { setError, isErrorProps } = useError();

  /*
  useCallback ajuda a garantir que a função não seja recriada em cada 
  renderização, evitando assim loops infinitos
  */
  const getCategories = useCallback(async () => {
    const response = await Category.list();
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      setCategories(response);
    }
  }, [setError, isErrorProps]);

  useEffect(() => {
    getCategories();
  }, [getCategories]); // Dependência vazia para garantir que seja executado apenas na montagem

  const create = async (name: string) => {
    const response = await Category.create(name);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      await getCategories(); //recarrega as categorias
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, getCategories, create }}>
      {children}
    </CategoryContext.Provider>
  );
}
