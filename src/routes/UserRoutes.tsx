import { Route, Routes } from "react-router-dom";
import { ExpensePage } from "../pages";
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
              <ExpensePage />
            </ExpenseProvider>
          }
        />
        <Route
          path="/gasto"
          element={
            <ExpenseProvider>
              <ExpensePage />
            </ExpenseProvider>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
