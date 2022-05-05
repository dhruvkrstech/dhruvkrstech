import React from 'react'
import Sidebar from '../Layout/Sidebar'
const Moderation = () => {
  return (
    <div>
      
      <Sidebar/>
       <div role="main" class="main-content">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="row align-items-center mb-2">
            <div class="col">
              <h2 class="h5 page-title">Moderation</h2>
            </div>
            <div class="col-auto"> <a href="#" >Dashboard</a> /  Moderation </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <div class="card shadow">
                <div class="card-header"> <strong class="card-title">List of  documents</strong> </div>
                <div class="row">
                  <div class="col-md-12 ">
                    <div class="">
                      <div class="">
                        <table class="table">
                          <thead class="thead-dark">
                            <tr>
                              <th>Section name </th>
                              <th> States </th>

                              <th> Document type</th>
                              <th>  Act Type </th>
                              <th>Sub section</th>
                               
                              <th>Action</th>
                              <th>&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Section 1</td>
                              <td>Document type A</td>
                              <td width="50"><button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button></td>
                              <td>&nbsp;</td>
                            </tr>
                                                       <tr>
                              <td>Section 1</td>
                              <td>Document type A</td>
                              <td><button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button></td>
                              <td>&nbsp;</td>
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
  </div>
  <div class="modal fade" id="verticalModal" tabindex="-1" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="verticalModalTitle">Section 1 </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>
      <div class="modal-body"> PDF file here</div>
      <div class="modal-footer">
                              <button type="button" class="btn mb-2 btn-success" data-dismiss="modal">Approved</button>
                              <button type="button" class="btn mb-2 btn-danger">disapproved</button>
                            </div>
    </div>
  </div>
</div>
<div class="modal fade modal-notif modal-slide" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="defaultModalLabel">Notifications</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>
      <div class="modal-body">
        <div class="list-group list-group-flush my-n3">
          <div class="list-group-item bg-transparent">
            <div class="row align-items-center">
              <div class="col"> <small><strong>Notifications</strong></small>
                <div class="my-0 text-muted small">notification here</div>
                <small class="badge badge-pill badge-light text-muted">1m ago</small> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">Clear All</button>
      </div>
    </div>
  </div>
</div></div>
  )
}

export default Moderation