import { Route, Routes } from "react-router-dom";
import { SpentPage } from "../pages";
import { Logout, MenuUser } from "../components";
import { ExpenseProvider } from "../contexts";

export default function UserRoutes() {
  return (
    <>
      <MenuUser />
      <Routes>
        <Route
          path="/"
          element={
            <ExpenseProvider>
              <SpentPage />
            </ExpenseProvider>
          }
        />
        <Route
          path="/gasto"
          element={
            <ExpenseProvider>
              <SpentPage />
            </ExpenseProvider>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
