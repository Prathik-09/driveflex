import React from 'react';
import dlogo from './dlogo2.jpg'; 
import facebook from './facebook.jpg';

function Footer() {
  return (
    <div className="main-container d-flex justify-content-center align-items-start">
      <div className="card mt-3 bg-black text-white" style={{ width: "100%", height: "auto", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)", borderRadius: "10px" }}>
        <div className="container">
          <div className="row mt-4">
          
            <div className="col-md-3">
              <div className="mb-3">
                <img src={dlogo} alt='Logo' style={{ height: "50px", width: "auto" }} />
              </div>
              <div className="mb-3 fs-3 fw-bold">Follow Us</div>
              <div className="mb-4 mt-4"> {/* Increased top margin to align better */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="logo" style={{ flex: 1, textAlign: 'center' }}>
                    <img src={facebook} alt="Logo 1" style={{ width: "60%" }} />
                  </div>
                  <div className="logo" style={{ flex: 1, textAlign: 'center' }}>
                    <img src="logo2.png" alt="Logo 2" style={{ width: "60%" }} />
                  </div>
                  <div className="logo" style={{ flex: 1, textAlign: 'center' }}>
                    <img src="logo3.png" alt="Logo 3" style={{ width: "60%" }} />
                  </div>
                  <div className="logo" style={{ flex: 1, textAlign: 'center' }}>
                    <img src="logo4.png" alt="Logo 4" style={{ width: "60%" }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Other columns can go here */}
            <div className="col-md-3">
              <div className="mb-3 fs-2 fw-bold">About Us</div>
              <div className="fs-5 mt-1">Blog</div>
              <div className="fs-5 mt-1">Team</div>
              <div className="fs-5 mt-1">Contact Us</div>
              <div className="fs-5 mt-1">Chat With Us</div>
              <div className="mt-1">
                <div className="d-flex justify-content-between mb-4">
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3 fs-2 fw-bold">Services</div>
              <div className="fs-5 mt-1">Trip Driver</div>
              <div className="fs-5 mt-1">Hourly Driver</div>
              <div className="fs-5 mt-1">Vehicle Pooling</div>
              <div className="fs-5 mt-1">Permanent Driver</div>
              <div className="fs-5 mt-1">Special Event Driver</div>
              <div className="mt-1">
                <div className="d-flex justify-content-between mb-4">
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3 fs-2 fw-bold">Business</div>
              <div className="fs-5 mt-1">Driver with us</div>
              <div className="mt-1">
                <div className="d-flex justify-content-between mb-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
