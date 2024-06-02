import { createContext, useCallback, useEffect, useState } from "react";
import {
  CategoryProps,
  CategoryContextProps,
  ProviderProps
} from "../types";
import { Category } from "../services";
import { useError } from "../hooks";

export const CategoryContext = createContext({} as CategoryContextProps);

export function CategoryProvider({ children }: ProviderProps) {
  const [categories, setCategories] = useState([] as CategoryProps[]);
  const {isErrorProps, setError} = useError();

  /*
  useCallback ajuda a garantir que a função não seja recriada em cada 
  renderização, evitando assim loops infinitos
  */
  const getCategories = useCallback(async () => {
    const response = await Category.list();
    if (!isErrorProps(response)) {
      setCategories(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const create = async (name: string) => {
    const response = await Category.create(name);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      await getCategories(); //recarrega as categorias
    }
  };

  const remove = async (id: string) => {
    const response = await Category.delete(id);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      await getCategories();
    }
  }

  const update = async (id:string, name: string) => {
    const response = await Category.update(id,name);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      await getCategories(); //recarrega as categorias
    }
  };
  
  // percorre o array e retorna o objeto que possui o ID
  const getCategoryById = (id:string) => {
    for(let i = 0; i < categories.length; i++ ){
      if( categories[i].id === id){
        return categories[i];
      }
    }
    return null;
  }

  return (
    <CategoryContext.Provider value={{ categories, create, remove, update, getCategoryById}}>
      {children}
    </CategoryContext.Provider>
  );
}
