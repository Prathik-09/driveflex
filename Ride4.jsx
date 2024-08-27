import React from 'react'

function Ride4() {
  return (
    <>
    <div className="main-container d-flex justify-content-center align-items-center mt-5">
                <div className="card mt-3" style={{ width: "80%", height: "300px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}>
                    <div className="text-center fw-bolder fs-2 " style={{marginTop:"40px"}}>
                        Reviews
                    </div>
                    <div className="container">
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h2>
                                Ready to pool your ride?
                            </h2>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{width:"300px"}}>
                            <p className='fs-5'>
                                Join our community and strat sharing your rides today.
                            </p>
                        </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center m-4">
                            <button type="button" className="btn btn-primary mr-1">FIND A RIDE</button>
                            <button type="button" className="btn btn-primary" style={{marginLeft:"60px"}}>OFFER A RIDE</button>
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default Ride4
