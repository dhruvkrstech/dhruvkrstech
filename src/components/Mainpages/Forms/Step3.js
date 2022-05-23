import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
const Step3 = () => {
  const [document, setdocument] = useState("");

  let [masterDocumentTypies, setMasterDocumentTypies] = useState([]);

  const [act_type_id, setAct_type_id] = useState(null);
  const [document_type_id, setDocument_type_id] = useState(null);
  // handle selection for doc
  const handleChangefordoc = (value) => {
    setDocument_type_id(value.value);
  };

  const handleFileSelect = (event) => {
    setdocument(event.target.files[0]);
  };

  useEffect(() => {
    const documentApiUrl =
      "http://18.232.16.231/adeptlaws/index.php/api/select-document-typies";
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
        // console.log(response);
        const documentOptions = response.data.data.map(function (element) {
          return { value: element.id, label: element.name };
        });
        setMasterDocumentTypies(documentOptions);
      },
      (error) => {}
    );
  }, []);


  const handleSubmitform = (event) => {

    event.preventDefault()
  
    const formData = new FormData();
  
    formData.append("document", document);
    formData.append("document_type_id", document_type_id);
    let token = localStorage.getItem("token");
     axios({
        method: "POST",
        url: "http://18.232.16.231/adeptlaws/index.php/api/admin-document-third-step",
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
    }).then((response)=>{
      console.log(response)
    },(error)=>{
  console.log(error)
    })
  
  


  
  }
  



  return (
    <div>

      <form onSubmit={handleSubmitform}>
      <div role="main">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center mb-2">
                <div class="col">
                  <h2 class="h5 page-title">Step 3</h2>
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
                      <strong class="card-title"></strong>{" "}
                    </div>
                    <div class="row">
                      <div class="col-md-12 ">
                        <div class="">
                          <div class="card-body">
                            <div class="col-md-6 mb-5">
                              <div class="form-group mb-4">
                                <label>Type of document</label>
                                <Select
                                  placeholder="Document Type"
                                  onChange={handleChangefordoc}
                                  options={masterDocumentTypies}
                                  classNamePrefix="select"
                                />
                              </div>

                              <div class="custom-file">
                                <input
                                  id="fileInput"
                                  type="file"
                                  className="form-control"
                                  onChange={handleFileSelect}
                                  class="custom-file-label"
                                />
                                <br></br>
                              </div>

                              <div class="clearfix "></div>
                              <br></br>
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
                            <div class="col-md-12">
                              <div class="row"></div>
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
    </div>
  );
};

export default Step3;
