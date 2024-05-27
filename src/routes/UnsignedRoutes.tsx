import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserCreate, UserLogin } from "../pages";
import { ErrorBar } from "../components";
import { useError } from "../hooks";
import UnsignedMenu from "../components/UnsignedMenu";

export default function UnsignedRoutes() {
  const { error } = useError();
  
  return (
    <BrowserRouter>
      <UnsignedMenu />
      {error ? <ErrorBar>{error.message}</ErrorBar> : <></>}
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/cadastrar" element={<UserCreate />} />
      </Routes>
    </BrowserRouter>
  );
}
