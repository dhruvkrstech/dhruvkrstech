import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
const Dashboard = () => {
  return (
    <div>

        <Sidebar/>
        <div role="main" class="main-content">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-12 left-rightpad">
          <div class="row align-items-center mb-2">
            <div class="col">
              <h2 class="h5 page-title">Dashboard </h2>
              <span class="welcome">Welcome Back</span> </div>
          </div>
          <div class="row">
            <div class="col-md-6 left-rightpad">
              <div class="card shadow ">
                <div class="text-center pad10"> <img src="assets/images/dash1.png"/> </div>
              </div>
            </div>
            <div class="col-md-6 left-rightpad">
              <div class="card shadow ">
                <div class="text-center pad10"> <img src="assets/images/dash2.png"/> </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 left-rightpad">
              <div class="card shadow ">
                <div class="text-center pad10"> <img src="assets/images/dash3.png"/> </div>
              </div>
            </div>
            <div class="col-md-6 left-rightpad">
              <div class="card shadow ">
                <div class="text-center pad10"> <img src="assets/images/dash4.png"/> </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 left-rightpad">
              <div class="card shadow ">
                <div class="text-center pad10"> <img src="assets/images/dash5.png"/> </div>
              </div>
            </div>
            <div class="col-md-6 left-rightpad">
              <div class="card shadow ">
                <div class="text-center pad10"> <img src="assets/images/dash6.png"/> </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 left-rightpad">
              <div class="card shadow ">
                <div class="text-center pad10"> <img src="assets/images/dash7.png"class="padright8"/> <img src="assets/images/dash8.png"/> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>    </div>
  )
}

export default Dashboard