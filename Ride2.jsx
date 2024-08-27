import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ride2() {
  return (
    <div className="main-container d-flex justify-content-center align-items-center">
<div className="card mt-3 bg-black text-white" style={{ width: "80%", height: "300px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}>        <div className="card-header text-center fw-bolder fs-2">
          HOW IT WORKS?
        </div>
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <ul className='fs-4 list-unstyled p-0 m-0'>
            <li className="mb-3">Step-1: Search for a ride or offer a ride.</li>
            <li className="mb-3">Step-2: Select a suitable match based on preferences.</li>
            <li className="mb-3">Step-3: Book the ride and make payment.</li>
            <li className="mb-3">Step-4: Continue with this action.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ride2;
