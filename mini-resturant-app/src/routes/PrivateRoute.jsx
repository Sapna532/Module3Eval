import {Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function PrivateRoute({children, role}){
    const {auth}= useContext(AuthContext);
    if(!auth) return <Navigate to ="/" />;

    if(role && auth.role !== role) return <Navigate to="/" />;
    return children;
}