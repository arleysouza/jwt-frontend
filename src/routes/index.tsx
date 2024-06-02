import AdmRoutes from "./AdmRoutes";
import UserRoutes from "./UserRoutes";
import UnsignedRoutes from "./UnsignedRoutes";
import { useUser } from "../hooks";

export default function Routes(){
    const {token,profile} = useUser();

    return !token? <UnsignedRoutes /> : profile === "adm" ? <AdmRoutes /> : <UserRoutes />;
}