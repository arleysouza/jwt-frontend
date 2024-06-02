import { Route, Routes } from "react-router-dom";
import { CategoryPage, ProductPage, UserPage } from "../pages";
import { ErrorBar, Logout, MenuAdm } from "../components";
import { useError } from "../hooks";
import { CategoryProvider, ProductProvider, UserProvider } from "../contexts";

export default function AdmRoutes() {
  const { error } = useError();

  return (
    <>
      <MenuAdm />
      {error ? <ErrorBar>{error.message}</ErrorBar> : <></>}
      <Routes>
        <Route
          path="/"
          element={
            <CategoryProvider>
              <ProductProvider>
                <ProductPage />
              </ProductProvider>
            </CategoryProvider>
          }
        />
        <Route
          path="/categoria"
          element={
            <CategoryProvider>
              <CategoryPage />
            </CategoryProvider>
          }
        />
        <Route
          path="/produto"
          element={
            <CategoryProvider>
              <ProductProvider>
                <ProductPage />
              </ProductProvider>
            </CategoryProvider>
          }
        />
        <Route
          path="/usuario"
          element={
            <UserProvider>
              <UserPage />
            </UserProvider>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
