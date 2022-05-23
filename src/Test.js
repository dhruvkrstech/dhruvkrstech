import { useState, useEffect } from "react";
import Select from "react-select";

// import SubSection from "./SubSection";
import axios from "axios";
import AsyncSelect from "react-select/async";
import Sidebar from "./components/Layout/Sidebar";
import Subsection from "./components/Mainpages/SubSection";
// import { upload } from "@testing-library/user-event/dist/upload";

const Upload = (props) => {
  let [masterStates, setMasterStates] = useState([]);
  let [masterActs, setMasterActs] = useState([]);
  let [masterDocumentTypies, setMasterDocumentTypies] = useState([]);
  let [states, setSelectedState] = useState();
  const [document, setdocument] = useState("");

  
  const [act_type_id, setAct_type_id] = useState(null);
  const [document_type_id, setDocument_type_id] = useState(null);
  const [keywords, setKeywords] = useState("");
  const [comments, setComments] = useState("");
  const [Subsection, setSubsection] = useState([]);
  const [sections, setsections] = useState([]);
  function createInputs() {
    return sections.map((el, i) => (
      <div key={i}>
        <input type="text" value={el || ""} onChange={handleChange.bind(i)} />
        <input
          type="button"
          value="remove"
          name={i}
          onClick={removeClick.bind(i)}
        />
        <div
          style={{
            width: "80%",
            marginLeft: "25px",
            padding: "5px",
            border: "1px solid #000",
          }}
        >
          <Subsection section={el} />
        </div>
      </div>
    ));
  }

  function handleChange(event) {
    let vals = [...sections];
    vals[this] = event.target.value;
    setsections(vals);
  }

  const addClick = () => {
    setsections([...sections, ""]);
  };

  const removeClick = (event) => {
    let vals = [...sections.val];
    let index = Number(event.target.name);
    vals.splice(index, 1);
    setsections(vals);
  };

  const handleSubmit = (event) => {
    //alert('A name was submitted: ' + values.val.join(', '));
    event.preventDefault();
    console.log("A name was submitted: " + JSON.stringify(sections));
  };

  //statesss
  const [inputValuestate, setValuestate] = useState("");
  
  // handle input change event for state
  const handleInputChangeforstate = (value) => {
    setValuestate(value);
  };


  useEffect(() => {
    const apiUrl = "http://18.232.16.231/adeptlaws/index.php/api/select-states";
    axios({
      method: "GET",
      url: apiUrl,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': Bearer ${localStorage.token}
      },
    }).then(
      (response) => {
        
        const servicesOptions = response.data.data.map(function (element) {
          return { value: element.id, label: element.name };
        });
        setMasterStates(servicesOptions);
      },
      (error) => {}
    );


    const actapiUrl = "http://18.232.16.231/adeptlaws/index.php/api/select-acts";
    axios({
      method: "GET",
      url: actapiUrl,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': Bearer ${localStorage.token}
      },
    }).then(
      (response) => {
        const actOptions = response.data.data.map(function (element) {
          return { value: element.id, label: element.name };
        });
        setMasterActs(actOptions);
      },
      (error) => {}
    );

    const documentApiUrl = "http://18.232.16.231/adeptlaws/index.php/api/select-document-typies";
    axios({
      method: "GET",
      url: documentApiUrl,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': Bearer ${localStorage.token}
      },
    }).then(
      (response) => {
        console.log(response);
        const documentOptions = response.data.data.map(function (element) {
          return { value: element.id, label: element.name };
        });
        setMasterDocumentTypies(documentOptions);
      },
      (error) => {}
    );

  }, []);

  


  const statesHandler = function (selectedItems) {
    const allergyArr = [];
    for (let i = 0; i < selectedItems.length; i++) {
      allergyArr.push(selectedItems[i].value);
    }
    // console.log(allergyArr)
    setSelectedState(allergyArr);
  };


  // handle selection act
  const handleChangeforAct = (value) => {    
    setAct_type_id(value.value);
  };


  // handle selection for doc
  const handleChangefordoc = (value) => {
    setDocument_type_id(value.value);    
  };

  
  const handleSubmitform = (event) => {

    event.preventDefault()

    const formData = new FormData();
    console.log(states)
  
    formData.append("document", document);
    formData.append("states[]", states);
    formData.append("sections", sections);
    formData.append("act_type_id", act_type_id);
    formData.append("document_type_id", document_type_id);
    formData.append("keywords", keywords);
    formData.append("keywords", keywords);
    formData.append("comments", comments);
    let token = localStorage.getItem("token");
    try {
     axios({
        method: "post",
     
        url: "http://18.232.16.231/adeptlaws/index.php/api/admin-documents",
        // processData:false,
        // contentType:false,
        dataType:'JSON',
        data: formData,
        headers: {
          'Access-Control-Allow-Credentials' :true,
          'content-type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      });
    } catch(error) {
      console.log(error)
    }

    // alert('click ok')

    // let payload = {
    //   states,
    //   sections,
    //   act_type_id,
    //   document,
    //   document_type_id,
    //   keywords,
    //   comments,
    //   Subsection,
    // };
    // console.log(payload)
console.log(formData)


//  const url =  "http://18.232.16.231/adeptlaws/index.php/api/admin-documents"
  
//     axios
//       .post(
//         url ,
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       )

      // .then((res) => {
      //   if (res.status === 200) {
      //     // window.location.href = "/app";
      //     // localStorage.getItem('token', res.data.token)
      //   } else alert(res.message);
      // })

      // .catch((error) => {
      //   alert(error);
      //   // if (error.res.status === 401) {
      //   //   console.log('Not success: ');
      //   //   }
      // });

      
  }

  const handleFileSelect = (event) => {
    setdocument(event.target.files[0])
  }

  return (
    <div>
      <Sidebar />
      <form onSubmit={handleSubmitform}>
        <div role="main" class="main-content">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="row align-items-center mb-2">
                  <div class="col">
                    <h2 class="h5 page-title">Upload</h2>
                  </div>
                  <div class="col-auto">
                    {" "}
                    <a href="#">Dashboard </a> / Upload document{" "}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 col-lg-12">
                    <div class="card shadow">
                      <div class="card-header">
                        {" "}
                        <strong class="card-title">Upload document</strong>{" "}
                      </div>
                      <div class="row">
                        <div class="col-md-12 ">
                          <div class="">
                            <div class="card-body">
                              <div class="col-md-6">
                                <div class="form-group mb-4">
                                  <label>State</label>
                                  <Select
                                    placeholder="States"
                                    isMulti
                                    onChange={statesHandler}
                                    options={masterStates}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                  />
                                  <span class="subinputtext">
                                    Choose state or multiple state
                                  </span>{" "}
                                </div>
                                <div class="form-group mb-4">
                                  <label>Act type</label>
                                 
                                  <Select
                                    placeholder="Acts"
                                    
                                    onChange={handleChangeforAct}
                                    
                                    options={masterActs}
                                    classNamePrefix="select"
                                  />
                                </div>
                                <div class="form-group mb-4">
                                  <label>Type of document</label>
                                  <Select
                                    placeholder="Document Type"
                                    
                                    onChange={handleChangefordoc}
                                    
                                    options={masterDocumentTypies}
                                    classNamePrefix="select"
                                  />
                                  
                                </div>
                                <div class="form-group mb-4">
                                  {/* <label >Section name</label> */}
                                  <>
                                    {createInputs()}
                                    <input
                                      type="button"
                                      class="btn mb-2 btn-light float-left"
                                      value="Add section"
                                      onClick={addClick}
                                    />
                                  </>
                                  <br></br>
                                </div>

                                <div class="form-group mb-4"></div>
                                <div class="form-group">
                                  <label for="customFile">Key Words</label>
                                  <div class="custom-file">
                                    <input
                                      type="text"
                                      className="form-control"
                                      class="custom-file-label"
                                      onChange={(e) =>
                                        setKeywords(e.target.value)
                                      }
                                    />
                                    <br></br>
                                  </div>
                                </div>

                                <div class="form-group">
                                  <label for="customFile">comments </label>
                                  <div class="custom-file">
                                    <input
                                      type="text"
                                      className="form-control"
                                      class="custom-file-label"
                                      onChange={(e) =>
                                        setComments(e.target.value)
                                      }
                                    />
                                    <br></br>
                                  </div>
                                </div>
                                <div class="form-group mb-3">
                                  {/* <button type="button" class="btn mb-2 btn-light float-right">+ Add sub section</button> */}
                                </div>
                                <div class="clearfix "></div>
                                <div class="form-group">
                                  <label for="customFile">
                                    Upload document
                                  </label>
                                  <div class="custom-file">
                                   
                                   <input id="fileInput" type="file"   className="form-control" onChange={handleFileSelect}
                                      class="custom-file-label" />
                                    <br></br>
                                  </div>
                                </div>
                                <div class="form-group ">
                                  <button
                                
                                    class="btn btn-lg btn-primary float-right mb-6"
                                    type="submit"
                                    name="submit"
                                  >
                                    Submit
                                  </button>
                                </div>
                                <div class="clearfix"></div>
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
      </form>

      <div
        class="modal fade"
        id="verticalModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="verticalModalTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="verticalModalTitle">
                Section 1{" "}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">&times;</span>{" "}
              </button>
            </div>
            <div class="modal-body">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui
              urna, cursus mollis cursus vitae, fringilla vel augue. In vitae
              dui ut ex fringilla consectetur. Sed vulputate ante arcu, non
              vehicula mauris porttitor quis. Praesent tempor varius orci sit
              amet sodales. Nullam feugiat condimentum posuere. Vivamus bibendum
              mattis mi, vitae placerat lorem sagittis nec. Proin ac magna
              iaculis, faucibus odio sit amet, volutpat felis. Proin eleifend
              suscipit eros, quis vulputate tellus condimentum eget. Maecenas
              eget dui velit. Aenean in maximus est, sit amet convallis tortor.
              In vel bibendum mauris, id rhoncus lectus. Suspendisse ullamcorper
              bibendum tellus a tincidunt. Donec feugiat dolor lectus, sed
              ullamcorper ante rutrum non. Mauris vestibulum, metus sit amet
              lobortis fringilla, dui est venenatis ligula, a euismod sem augue
              vel lorem. Nunc feugiat eget tortor vel tristique. Mauris lobortis
              efficitur ligula, et consectetur lectus maximus sed.{" "}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn mb-2 btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade modal-notif modal-slide"
        tabindex="-1"
        role="dialog"
        aria-labelledby="defaultModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="defaultModalLabel">
                Notifications
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">&times;</span>{" "}
              </button>
            </div>
            <div class="modal-body">
              <div class="list-group list-group-flush my-n3">
                <div class="list-group-item bg-transparent">
                  <div class="row align-items-center">
                    <div class="col">
                      {" "}
                      <small>
                        <strong>Notifications</strong>
                      </small>
                      <div class="my-0 text-muted small">notification here</div>
                      <small class="badge badge-pill badge-light text-muted">
                        1m ago
                      </small>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary btn-block"
                data-dismiss="modal"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
