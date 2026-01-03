import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const {login}= useContext(AuthContext);
    const navigate= useNavigate();

    const handleLogin=()=>{
        if(email==="admin@gmail.com" && password==="admin1234"){
            login({role:"admin"});
            navigate("/admin/dashboard");
        }else if(
            email==="customer@gmail.com" && password==="customer1234"
        ){
             login({role:"customer"});
            navigate("/customer/dashboard");

        }else{
            alert("Invalid Credentials");
        }
    };
    return (
        <div>
            <h2> Login</h2>
            <input placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}