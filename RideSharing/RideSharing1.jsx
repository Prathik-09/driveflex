import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function RideSharing1() {
    return (
        <>
            <div className="d-flex justify-content-center bg">
                <div className="card shadow p-3 mb-5 " style={{ width: "80%", height: "600px", marginTop: "50px"}}>
                    <div className="mt-3 text-black fw-bold fs-3 ms-3">
                        Find Your Perfect Ride.
                    </div>
                    <div className="mt-3 text-black fw-bold fs-4 ms-3">
                        Discover convinient and affordable ride sharing option
                    </div>
                    <div className="row mt-3">
                        <div className="col-auto">
                            <button type="button" className="btn btn-dark ms-3" style={{ width: "150px", borderRadius: "10px", backgroundColor: "black", color: 'white', height: "auto",marginTop: "30px",cursor:"pointer"}}>
                                Search Now
                            </button>
                        </div>
                        <div className="col">
                            <div className="card ms-lg-5 " style={{ width: "25rem", height: "auto", float: "right", border: "2px solid black"}}>
                            <div className="card-body d-flex flex-column align-items-center">
                            <input type="text" placeholder="Pick Up Location" className="mb-3 mt-4" style={{width: "80%",height: "35px",borderRadius: "7px",textAlign: "center",lineHeight: "35px",fontSize: "16px"  }} 
                            />
  

                                <input type="text" placeholder="Drop Location" className="mb-3 mt-4" style={{ width: "80%",height:"35px",borderRadius:"7px",textAlign: "center",lineHeight: "35px",fontSize: "16px"  }} />
                                <input type="datetime-local" className="mb-3 mt-4" style={{ width: "80%",height:"35px",borderRadius:"7px",textAlign: "center",lineHeight: "35px",fontSize: "16px"  }} />
                                <input type="number" placeholder="Required seats" className="mb-3 mt-4" style={{ width: "80%",height:"35px",borderRadius:"7px" ,textAlign: "center",lineHeight: "35px",fontSize: "16px" }} />
                                <input type="text" placeholder='Find a Rider' className="mb-3 mt-4" style={{ width: "80%",height:"35px",borderRadius:"7px",textAlign: "center",lineHeight: "35px",fontSize: "16px"  }} />
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RideSharing1
