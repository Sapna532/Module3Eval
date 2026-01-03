import { useEffect, useState } from "react";

export default function UpdateRestaurant(){
    const {id}= useParams();
    const navigate=useNavigate();
    const [form, setForm]= useState(null);
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("evaData") )|| [];
        const resturant=data.find((r)=> r.resturantID === Number(id));
    setForm(resturant);
    
    }, [id]);
    const handleUpdate=()=>{
        if(!window.confirm("Sure to update?")) return;
        const data=JSON.parse(localStorage.getItem("evaData")) || [];
        const updated=data.map((r)=>r.resturantID===Number(id)? form:r);
        localStorage.setItem("evaData", JSON.stringify(updated));
        alert("Updated");
        navigate("/admin/dashboard");
    };
    if(!form)
}