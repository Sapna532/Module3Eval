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
         <select value={typeFilter} onChange={(e)=>setTypeFilter(e.target.value="")}> <option>All Types</option>
         <option>Rajasthani</option>
                <option>Gujarati</option>
                <option>Jain</option>
                <option>Thai</option>
                <option>Mughalai </option>
                <option>North</option>
                <option>South</option>
         
         </select>
         <select value={typeFilter} onChange={(e)=>setTypeFilter(e.target.value)}> <option value=""> All Parking</option>
         <option  value="true"> Parking Availabe</option>
         <option  value="false">No parking</option> </select>
        </div>
     );
 }