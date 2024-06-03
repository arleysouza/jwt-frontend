import { Route, Routes } from "react-router-dom";
import { UserCreate, UserLogin } from "../pages";
import { MenuUnsigned } from "../components";

export default function UnsignedRoutes() {
  return (
    <>
      <MenuUnsigned />
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/cadastrar" element={<UserCreate />} />
      </Routes>
    </>
  );
}
