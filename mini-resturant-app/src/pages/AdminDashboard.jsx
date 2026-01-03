import { useEffect, useState } from "react";

export default function AdminDashboard(){
    const [data, setData]= useState([]);
    const [form, setForm]= useState({
        resturantName:"",
        address:"",
        type:"Rajasthani",
        parkingLot:"true",
        image:"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });
    useEffect(()=> {
        setDate(JSON.parse(localStorage.getItem("evaData"))|| []);
    }, []);
    const addResturant=()=>{
        if(!form.resturantName || !form.address){
            alert("Empty form not allowed");
            return;
        }
        const newData=[
            ...data, {...form, resturantID: Date.now(),
                parkingLot: form.parkingLot==="ture"
            },
        ];
        localStorage.setItem("evaData", JSON.stringify(newData));
        setData(newData);
        alert("Added");
    };

    const deleteResturant=(id)=>{
        if(!window.confirm("Sure you want to delete?")) return;
        const updated =data.filter((r)=>r.resturantID!==id);
        localStorage.setItem("evaData", JSON.stringify(updated));
        setData(updated);
        alert("Deleted successfully"); 
    };

    return(
        <div>
            <h2> Admin Dashboard</h2>
            <input placeholder="Name" onChange={(e)=>setForm({...form, resturantName:e.target.value})}/>
            <input placeholder="Address" onChange={(e)=>setForm({...form, address:e.target.value})}/>

            <select onChange={(e)=> setForm({...form, type:e.target.value})}>
                <option>Rajasthani</option>
                <option>Gujarati</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>Mughalai </option>
                <option>North</option>
                <option>South</option>
            </select>

            <select onChange={(e)=> setForm({...form, parkingLot:e.target.value})}>
                <option value="true"> Yes</option>
                <option value="false"> No</option>
            </select>
            <button onClick={addResturant}>Add </button>
             {data.map((r)=>(
                <RestaurantCard key= {r.resturantID} {...r} onDelete={deleteResturant} isAdmin/>
             ))}
        </div>
    );

}