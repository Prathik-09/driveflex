import React from 'react'

function Ride3() {
    return (
        <>
            <div className="main-container d-flex justify-content-center align-items-center mt-5">
                <div className="card mt-3" style={{ width: "80%", height: "300px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}>
                    <div className="text-center fw-bolder fs-2 mt-3">
                        Benifits Of Vehcile Pooling
                    </div>
                    <div className="container">
                        <div className="row mt-5 justify-content-center align-items-center">
                            <div className="col-md-3 d-flex justify-content-center">
                                <img src="image1.jpg" className="img-fluid" alt="1" />
                            </div>
                            <div className="col-md-3 d-flex justify-content-center">
                                <img src="image2.jpg" className="img-fluid" alt="2" />
                            </div>
                            <div className="col-md-3 d-flex justify-content-center">
                                <img src="image3.jpg" className="img-fluid" alt=" 3" />
                            </div>
                            <div className="col-md-3 d-flex justify-content-center">
                                <img src="image4.jpg" className="img-fluid" alt=" 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ride3;
