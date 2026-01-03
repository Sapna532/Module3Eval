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
    if(!form) return <h3> Loading...</h3>;
    return(
        <div>
            <h2> update Resturant</h2>
            <input  value={form.resturantName} onChange={(e)=> setForm({ ...form, resturantName:e.target.value})}/>
            <input  value={form.address} onChange
            ={(e)=> setForm({ ...form, address:e.target.value})}/>

            <select value= {form.type} onChange={(e) => setForm({...form, type: e.target.value})}>
                <option>Rajasthani</option>
                <option>Gujarati</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>Mughalai </option>
                <option>North</option>
                <option>South</option>
            </select>
        </div>
    )
}