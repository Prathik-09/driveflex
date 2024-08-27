import React from 'react'

function Ride1() {
  return (
    <>
    <div className="d-flex justify-content-center">
            <div className="card shadow p-3 mb-5 " style={{ width: "80%", height: "300px",marginTop:"50px" }}>
                <div className="row no-gutters h-100">
                    {/* Content Section - 60% */}
                    <div className="col-md-7 d-flex align-items-center" style={{ padding: "20px" }}>
                        <div>
                            <h5 className="card-title fs-2 fw-bolder">SAVE COST AND SHARE YOUR RIDE</h5>
                            <p className="card-text">Join our vehcile pooling service and optimize your travel</p>
                            <a href="/" className="btn btn-primary">Find a Ride</a>
                            <a href="/" className="btn btn-primary ms-lg-5">Offer a Ride</a>
                        </div>
                    </div>

                    {/* Image Section - 40% */}
                    <div className="col-md-5" style={{ overflow: "hidden" }}>
                        <img
                            src=""
                            alt="Placeholder"
                            className="card-img h-100"
                            style={{ objectFit: "cover", width: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ride1;
