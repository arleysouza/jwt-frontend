import { Route, Routes } from "react-router-dom";
import { CategoryPage, ProductPage, UserPage } from "../pages";
import { Logout, MenuAdm } from "../components";
import { CategoryProvider, ProductProvider, UserProvider } from "../contexts";

export default function AdmRoutes() {
  return (
    <>
      <MenuAdm />
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
