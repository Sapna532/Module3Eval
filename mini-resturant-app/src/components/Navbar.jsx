import { useEffect } from "react";

export default function Navbar({
search,
setSearch,
typeFilter,
setTypeFilter,
parkingFilter,
setParkingFilter,
 }){
     const searchRef= useRef(null);
     useEffect(()=>{
        searchRef.current.focus();
     }, []);

     return(
        <div style={{marginBottom: "20px"}}>
         <input ref={searchRef} placeholder="Serach by name" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        </div>
     )
 }