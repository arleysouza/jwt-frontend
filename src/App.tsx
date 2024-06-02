import { BrowserRouter } from "react-router-dom";
import { ErrorProvider, UserProvider } from "./contexts";
import Routes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ErrorProvider>
    </BrowserRouter>
  );
}
