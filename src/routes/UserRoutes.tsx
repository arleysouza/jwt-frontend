import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryPage } from "../pages";
import { ErrorBar, Logout, UserMenu } from "../components";
import { useError } from "../hooks";
import { CategoryProvider } from "../contexts";

export default function UserRoutes() {
  const { error } = useError();

  return (
    <CategoryProvider>
      <BrowserRouter>
        <UserMenu />
        {error ? <ErrorBar>{error.message}</ErrorBar> : <></>}
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/categoria" element={<CategoryPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </CategoryProvider>
  );
}
