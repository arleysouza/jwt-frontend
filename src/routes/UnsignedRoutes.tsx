import { Route, Routes } from "react-router-dom";
import { UserCreate, UserLogin } from "../pages";
import { ErrorBar, MenuUnsigned } from "../components";
import { useError } from "../hooks";

export default function UnsignedRoutes() {
  const { error } = useError();

  return (
    <>
      <MenuUnsigned />
      {error ? <ErrorBar>{error.message}</ErrorBar> : <></>}
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/cadastrar" element={<UserCreate />} />
      </Routes>
    </>
  );
}
