import React from 'react';

//Searches for all vehicles in database, recieves props from parent Home component
//Dispatches getAllVehicles through displayAll function
export default function SearchAll(props) {

    const autos = props.autos.map((auto, index) => (
            <div key={index}>
                <h3>{auto.year} {auto.make} {auto.model} -- Miles: {auto.mileage}</h3>
                <h4>Id: {auto.id} -- Parking Space: {auto.parkingSpace}</h4>
                <p>----------------------------------------------------</p>  
            </div>
    ));
       
    return(
        
        <div>
            <header role="banner">
                <h2>Access Granted!</h2>
                
            </header>
            
            <section className="search">
                <header>
                    <h2>Search Entire Inventory</h2>
                    <h3>Will list all vehicles and associated info for 
                        entire dealership stock
                    </h3>               
                </header>
                <button onClick={()=>props.displayAll()}>Search All</button>
                <div className="vehicleList" aria-live="assertive">
                {props.isShow && <div>{autos}</div>}
                </div>
            </section>           
            
        </div>
    );
}