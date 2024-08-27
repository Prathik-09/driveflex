import React from 'react'
import Drivers from './Drivers'
function RideSharing2() {
    var Driver=[
        {
            name:"vamshi",
            photo:"link",
            time:"9:45am to 5:00pm",
        },
        {
            name:"sai",
            photo:"link",
            time:"9:45am to 5:00pm",
        },
        {
            name:"pranaya",
            photo:"link",
            time:"9:45am to 5:00pm",
        },
        {
            name:"Abhishek",
            photo:"link",
            time:"9:45am to 5:00pm",
        }
    ]
  return (
    <>
     <div className="d-flex justify-content-center">
    <div className="card shadow p-3 mb-5" style={{ width: "80%", height: "600px", marginTop: "50px"}}>
        <div className="mt-3 text-black fw-bold fs-3 ms-3">
            Available Rides
        </div>
        <div className='mt-4'></div>
        {Driver.map((driver, index) => (
    <Drivers 
        key={index} 
        name={driver.name} 
        photo={driver.photo} 
        time={driver.time} 
        Button={driver.Btn} 
    />
))}

    </div>
</div>

    </>
  )
}

export default RideSharing2
