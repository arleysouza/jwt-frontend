import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts";
import Routes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}
