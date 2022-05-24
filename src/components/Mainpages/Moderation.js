import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import Sidebar from "../Layout/Sidebar";
const Moderation = () => {
  const [list, setList] = useState("");

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
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log("moderation",response.data.data.data);

      setList(response.data.data.data);
  console.log("modera",setList)
    });
  }, []);

  return (
    <div>
      <Sidebar />
      <div role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center mb-2">
                <div class="col">
                  <h2 class="h5 page-title">Moderation</h2>
                </div>
                <div class="col-auto">
                  {" "}
                  <a href="#">Dashboard</a> / Moderation{" "}
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <div class="card shadow">
                    <div class="card-header">
                      {" "}
                      <strong class="card-title">List of documents</strong>{" "}
                    </div>
                    <div class="row">
                      <div class="col-md-12 ">
                        <div class="">
                          <div class="">
                         
                                  <table class="table">
                                    <thead class="thead-dark">
                                      <tr>
                                        <th>Act Name</th>
                                        <th>Document type</th>
                                        <th>Comments</th>
                                        <th>Document</th>
                                        <th> States</th>
                                        <th> Sections</th>
                                        <th> Subsection</th>
                                        <th> Status</th>
                                         </tr>
                                    </thead>

                                    <tbody>

                                    {list.length > 0 && (
                              <>
                                {list.map((items, index) => (
                                      <tr>
                                        <td>{items.act.name}</td>
                                        <td>{items.document_type_id}</td>
                                        <td>{items.comments}</td>
                                        <td>{items.document}</td>
                                        {/* <iframe src={items.document} /> */}

                                        {/* <td>
                                          <button
                                            type="button"
                                            class="btn mb-2 btn-outline-success smallbtn"
                                            data-toggle="modal"
                                            data-target="#verticalModal"
                                          >
                                            View
                                          </button>
                                        </td> */}
                                        <td>
                                          {items.states.map((s, index) => {
                                            return (
                                              <>
                                              {s.name} <br/> 
                                              </>
                                            );
                                          })}
                                        </td>
                                        <td>
                                          {items.sub_sections.map((sub, index) => {
                                            return (
                                              <>
                                             {sub.name} 
                                              </>
                                            );
                                          })}
                                        </td>
                                        <td>
                                          {items.sections.map((sec, index) => {
                                            return (
                                              <>
                                              {sec.name}
                                              </>
                                            );
                                          })}
                                        </td>
                                        <td>{items.status}</td>

                                      </tr>
                                      ))}
                              </>
                            )}
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
    </div>
  );
};

export default Moderation;























{/* <tbody>
                                            
<>
<tr
  class="accordion-toggle collapsed"
  id="c-3599"
  data-toggle="collapse"
  data-parent="#c-3599"
  href="#collap-3599"
>
  <td class="w77">{item.section_name}</td>
  <td class="porelative w33">
    <div class="iconouter">
      {" "}
      <span
        class="fe fe-16 fe-plus-circle borderbox"
        data-toggle="modal"
        data-target="#verticalModal"
      ></span>{" "}
      <span
        class="fe fe-16 fe-edit-2 borderbox"
        alt="Add Category "
      ></span>{" "}
      <span class="fe fe-16 fe-trash-2 borderbox"></span>
    </div>
  </td>
  <td>&nbsp;</td>
</tr>
<tr
  id="collap-3599"
  class="collapse in p-3 bg-light"
>
  <td colspan="3">
    <div class="subcontent">
      <ul>
        <li>
          <div class="row bopad">
            <div class="col-md-10">
              Section 2 - main
              section
            </div>
            <div class="iconouter">
              {" "}
              <span
                class="fe fe-16 fe-plus-circle borderbox"
                data-toggle="modal"
                data-target="#verticalModal"
              ></span>{" "}
              <span
                class="fe fe-16 fe-edit-2 borderbox"
                alt="Add Category "
              ></span>{" "}
              <span class="fe fe-16 fe-trash-2 borderbox"></span>
            </div>
          </div>
          <ul>
            <li>
              <div class="row bopad">
                <div class="col-md-10">
                  Section 2 - main
                  section
                </div>
                <div class="iconouter">
                  {" "}
                  <span
                    class="fe fe-16 fe-plus-circle borderbox"
                    data-toggle="modal"
                    data-target="#verticalModal"
                  ></span>{" "}
                  <span
                    class="fe fe-16 fe-edit-2 borderbox"
                    alt="Add Category "
                  ></span>{" "}
                  <span class="fe fe-16 fe-trash-2 borderbox"></span>
                </div>
              </div>
              <ul>
                <li>
                  <div class="row bopad">
                    <div class="col-md-10">
                      Section 2 -
                      main section
                    </div>
                    <div class="iconouter">
                      {" "}
                      <span
                        class="fe fe-16 fe-plus-circle borderbox"
                        data-toggle="modal"
                        data-target="#verticalModal"
                      ></span>{" "}
                      <span
                        class="fe fe-16 fe-edit-2 borderbox"
                        alt="Add Category "
                      ></span>{" "}
                      <span class="fe fe-16 fe-trash-2 borderbox"></span>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div class="row bopad">
                        <div class="col-md-10">
                          Section 2
                          - main
                          section
                        </div>
                        <div class="iconouter">
                          {" "}
                          <span
                            class="fe fe-16 fe-plus-circle borderbox"
                            data-toggle="modal"
                            data-target="#verticalModal"
                          ></span>{" "}
                          <span
                            class="fe fe-16 fe-edit-2 borderbox"
                            alt="Add Category "
                          ></span>{" "}
                          <span class="fe fe-16 fe-trash-2 borderbox"></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <div class="row bopad">
            <div class="col-md-10">
              Section 2 - main
              section
            </div>
            <div class="iconouter">
              {" "}
              <span
                class="fe fe-16 fe-plus-circle borderbox"
                data-toggle="modal"
                data-target="#verticalModal"
              ></span>{" "}
              <span
                class="fe fe-16 fe-edit-2 borderbox"
                alt="Add Category "
              ></span>{" "}
              <span class="fe fe-16 fe-trash-2 borderbox"></span>
            </div>
          </div>
        </li>
        <li>
          <div class="row bopad">
            <div class="col-md-10">
              Section 2 - main
              section
            </div>
            <div class="iconouter">
              {" "}
              <span
                class="fe fe-16 fe-plus-circle borderbox"
                data-toggle="modal"
                data-target="#verticalModal"
              ></span>{" "}
              <span
                class="fe fe-16 fe-edit-2 borderbox"
                alt="Add Category "
              ></span>{" "}
              <span class="fe fe-16 fe-trash-2 borderbox"></span>
            </div>
          </div>
        </li>  
      </ul>
    </div>
  </td>
</tr>


</>
</tbody> */}