import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DriverCard(props) {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center p-3 border rounded" style={{ width: "100%", height: "auto", border: "2px solid black", borderRadius: "10px" }}>
                <img 
                    src={props.img} 
                    alt="driver" 
                    style={{ 
                        width: "80px", 
                        height: "80px", 
                        borderRadius: "50%",  // Makes the image round
                        objectFit: "cover"    // Ensures the image covers the area without distortion
                    }} 
                    className="me-3" 
                />
                <div className="d-flex flex-column flex-grow-1 me-3">
                    <h2 className="fs-4 mb-1 fw-bold">Name: {props.name}</h2>
                    <p className="mb-2 ">Time: {props.time}</p>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
}

export default DriverCard;
