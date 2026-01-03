import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

export default function CustomerDashboard(){
    const [data, setData]=useState([]);
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("evaData")) || []);
    }, []);

    return(
        <div>
            <h2> CUstomer Dashboard</h2>
            {data.map((r)=>(
                <RestaurantCard key={r.resturantID} {...r}/>
            ))}
        </div>
    );
}