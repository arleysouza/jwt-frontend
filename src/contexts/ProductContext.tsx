import { createContext, useCallback, useEffect, useState } from "react";
import { ErrorProps, ProductContextProps, ProductProps, ProviderProps } from "../types";
import { Product } from "../services";

export const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);
  const [products, setProducts] = useState([] as ProductProps[]);
  
  // verifica se o objeto é do tipo ErrorProps
  const isErrorProps = (object: any): object is ErrorProps => "message" in object;

  /*
  useCallback ajuda a garantir que a função não seja recriada em cada 
  renderização, evitando assim loops infinitos
  */
  const getProducts = useCallback(async () => {
    const response = await Product.list();
    if (!isErrorProps(response)) {
      setProducts(response);
    }
    else{
      setError(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const create = async (category:string, name: string) => {
    const response = await Product.create(category, name);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      await getProducts(); //recarrega os produtos
    }
  };

  const update = async (id:string, category:string, name: string) => {
    const response = await Product.update(id,category,name);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      await getProducts();
    }
  };

  const remove = async (id: string) => {
    const response = await Product.delete(id);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      await getProducts();
    }
  }

  return (
    <ProductContext.Provider
      value={{ products, create, update, remove, error, setError, isErrorProps }}
    >
      {children}
    </ProductContext.Provider>
  );
}
