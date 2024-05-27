import { ErrorProvider, UserProvider } from "./contexts";
import Routes from "./routes";

export default function App() {
  return (
    <ErrorProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ErrorProvider>
  );
}
