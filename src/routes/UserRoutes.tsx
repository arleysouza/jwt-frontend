import { Route, Routes } from "react-router-dom";
import { SpentPage } from "../pages";
import { ErrorBar, Logout, MenuUser } from "../components";
import { useError } from "../hooks";
import { CategoryProvider, ProductProvider, ExpenseProvider } from "../contexts";

export default function UserRoutes() {
  const { error } = useError();

  return (
    <>
      <MenuUser />
      {error ? <ErrorBar>{error.message}</ErrorBar> : <></>}
      <Routes>
        <Route
          path="/"
          element={
            <CategoryProvider>
              <ProductProvider>
                <ExpenseProvider>
                  <SpentPage />
                </ExpenseProvider>
              </ProductProvider>
            </CategoryProvider>
          }
        />
        <Route
          path="/gasto"
          element={
            <CategoryProvider>
              <ProductProvider>
                <ExpenseProvider>
                  <SpentPage />
                </ExpenseProvider>
              </ProductProvider>
            </CategoryProvider>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
