export default function RestaurantCard({
    resturantName, 
    address,
    type, parkingLot,
    image,
    resturantID,
    onDelete,
    isAdmin,
}){
    return(
        <div>
            <img src={image} width={200}/>
            <h3> {resturantName}</h3>
            <p> {address}</p>
            <p>{type}</p>
            <p>Parking:{parkingLot? "Yes" : "No"}</p>
            {isAdmin && (<button onClick={()=> onDelete(resturantID)}>Deelete</button>)}
        </div>
    );
}