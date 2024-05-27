import { useUser } from "../hooks";
import AdmRoutes from "./AdmRoutes";
import UserRoutes from "./UserRoutes";
import UnsignedRoutes from "./UnsignedRoutes";

export default function Routes(){
    const {token, profile} = useUser();

    return !token? <UnsignedRoutes /> : profile === "adm" ? <AdmRoutes /> : <UserRoutes />;
}