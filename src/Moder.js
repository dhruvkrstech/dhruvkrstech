import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
const Moder = () => {

const [list ,setList]=useState("")

let [MasterSec, setMasterSec] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");

    const docurl =
      " http://18.232.16.231/adeptlaws/index.php/api/admin-documents";
    axios({
      method: "GET",
      url: docurl,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${token}`},
    }).then((repsonse)=>{
//  console.log(repsonse)
      console.log(repsonse.data.data.data[1].states[1].name)
      console.log(repsonse.data.data.data)
      
      setList(repsonse.data.data.data)

    })
      
 
  }, []);


  return (
    <div>
        
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
                      {list.length > 0 && (
        <ul>
          {list.map((items,index) => (
                        <table class="table">
                          <thead class="thead-dark">
                            <tr>
                                <th> Act Name</th>
                              {/* <th>Section name </th> */}
                              <th>Document type</th>
                              <th>Comments</th>
                              <th>Document</th>
                              <th> States</th>

                              <th>&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                            <td>{items.act.name}</td>
                            <td>{items.document_type_id}</td> 
                            <td>{items.comments}</td> 

                            <td>{items.document}</td> 
                              <td>Document type A</td>
                              <td> comments</td>

                              <td width="50"><button type="button" class="btn mb-2 btn-outline-success smallbtn" data-toggle="modal" data-target="#verticalModal">View</button></td>
                              <td>{items.states.map((s,index)=>{
       return(
         <>
          <td>{s.name} </td>      
         </>
        
       )
       console.log(s)

      })}</td> 
                            </tr>
               
                            
                          </tbody>
                        </table>
                          ))}
                          </ul>
                        )}
                  
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
    </div>
  )
}

export default Moder