import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div className='he'>
      <div className="card text-bg-dark text-white border-0">
  <img src="/assets/bg.jpg" className="card-img" alt="background" height="550px"/>
  <div className="card-img-overlay d-flex felx-column justify-content-center">
    <div className='container'>
    <h5 className="card-title display-3 fw-bolder mb-0" style={{color:'black'}}> NEW SEASON ARRIVALS </h5>
    <p className="card-text lead fs-2" style={{color:'black'}}>
        CHECK OUT ALL THE TRENDS
        </p>
        </div>
  </div>
</div>
<Products/>
    </div>
  )
}

export default Home ;
