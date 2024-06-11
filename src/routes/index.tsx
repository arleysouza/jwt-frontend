import AdmRoutes from "./AdmRoutes";
import UserRoutes from "./UserRoutes";
import UnsignedRoutes from "./UnsignedRoutes";
import { useUser } from "../hooks";

export default function Routes(){
    let {token,profile} = useUser();
    if( !token || !profile ){
        // a 1a passada pode ocorrer do token e profile serem nulos e
        // fazer passar "rapidamente" pela página de login
        token = localStorage.getItem("token");
        profile = localStorage.getItem("profile");
    }
   
    return !token? <UnsignedRoutes /> : profile === "adm" ? <AdmRoutes /> : <UserRoutes />;
}