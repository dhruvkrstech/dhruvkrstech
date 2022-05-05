import React from 'react'
import Sidebar from '../Layout/Sidebar'

const Search_Result = () => {
  return (
    <div> 
      <Sidebar/>
       <div role="main" class="main-content">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="row align-items-center mb-2">
            <div class="col">
              <h2 class="h5 page-title">Search result</h2>
            </div>
            <div class="col-auto"> <a href="#" >Dashboard</a> /  PF ACT </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <div class="card shadow">
                <div class="card-header"> <strong class="card-title">PF ACT</strong> </div>
                <div class="row">
                  <div class="col-md-12 ">
                    <div class="">
                      <div class="">
                        <table class="table">
                          <thead class="thead-dark">
                            <tr>
                              <th>Section name </th>
                              <th> Document type</th>
                              <th>Action</th>
                              <th>&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="accordion-toggle collapsed" id="c-3599" data-toggle="collapse" data-parent="#c-3599" href="#collap-3599">
                              <td>Section 1</td>
                              <td>Document type A</td>
                              <td width="50"><button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button></td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr id="collap-3599" class="collapse in p-3 bg-light">
                              <td colspan="4"><div class="subcontent">
                                  <ul>
                                    <li>
                                      <div class="row bopad">
                                        <div class="col-md-10">Section 2 - main section</div>
                                        <div class="col-md-2">
                                          <button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button>
                                        </div>
                                      </div>
                                      <ul>
                                        <li>
                                          <div class="row bopad">
                                            <div class="col-md-10">Section 2 - main section</div>
                                            <div class="col-md-2">
                                              <button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <div class="row bopad">
                                        <div class="col-md-10">Section 2 - main section</div>
                                        <div class="col-md-2">
                                          <button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="row bopad">
                                        <div class="col-md-10">Section 2 - main section</div>
                                        <div class="col-md-2">
                                          <button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div></td>
                            </tr>
                            <tr class="accordion-toggle collapsed" id="c-3600" data-toggle="collapse" data-parent="#c-3600" href="#collap-3600">
                              <td>Section 1</td>
                              <td>Document type A</td>
                              <td><button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button></td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr id="collap-3600" class="collapse in p-3 bg-light">
                              <td colspan="4"><div class="subcontent">
                                  <ul>
                                    <li>
                                      <div class="row bopad">
                                        <div class="col-md-10">Section 2 - main section</div>
                                        <div class="col-md-2">
                                          <button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button>
                                        </div>
                                      </div>
                                      <ul>
                                        <li>
                                          <div class="row bopad">
                                            <div class="col-md-10">Section 2 - main section</div>
                                            <div class="col-md-2">
                                              <button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <div class="row bopad">
                                        <div class="col-md-10">Section 2 - main section</div>
                                        <div class="col-md-2">
                                          <button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="row bopad">
                                        <div class="col-md-10">Section 2 - main section</div>
                                        <div class="col-md-2">
                                          <button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Search_Result