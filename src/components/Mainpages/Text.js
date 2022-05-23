import { useEffect, useState } from "react";

import Select from "react-select";
import axios from "axios";
const Step1 = () => {
  let [masterStates, setMasterStates] = useState([]);
  let [states, setSelectedState] = useState();
  const [act_type_id, setAct_type_id] = useState(null);
  let [masterActs, setMasterActs] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [comments, setComments] = useState("");
  const [text, setText] = useState("");
  const [sections, setSections] = useState([]);

  const addItems = (e) => {
    console.log(e.target.value);
  };
  // const removesection = (index) => {
  //   setSections([...sections, text]);
  //   sections.splice(index);
  //   setSections(sections);
  //   alert("removed");
  // };
  
  const removesection = (e,index) => {
    e.preventDefault();
    const itm = [...sections];
    itm.splice(index, 1);
    setSections(itm);
    console.log(setSections)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSections([...sections, text]);
    setText("");
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

    const actapiUrl =
      "http://18.232.16.231/adeptlaws/index.php/api/select-acts";
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

//form handler
const handleSubmitform = (event) => {

  event.preventDefault()

  const formData = new FormData();

  formData.append("states[]", states);
  formData.append("sections[]", sections);
  formData.append("act_type_id", act_type_id);
  formData.append("keywords", keywords);
  formData.append("comments", comments);
  
  let token = localStorage.getItem("token");
  try {
   axios({
      method: "post",
   
      url: "http://18.232.16.231/adeptlaws/index.php/api/admin-document-first-step",
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

console.log(formData)

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
                    <h2 class="h5 page-title">Step 1</h2>
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

                                <br></br>
                                <div class="input-group mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Add Section"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                  />
                                  <div class="input-group-append">
                                    <button
                                      class="btn btn-primary"
                                      type="submit"
                                      id="button-addon2"
                                      onClick={handleSubmit}
                                    >
                                      + Add more Section
                                    </button>
                                  </div>
                                </div>
                                <div class="input-group mb-5">
                                  {sections.map((itm, index) => (
                                    <div class="w-100 border-bottom d-flex mb-1">
                                      {" "}
                                      <div class="col-md-11 lineh" key={index}>
                                        {itm}{" "}
                                      </div>{" "}

                                      <div class="col-md-1 lineh">
                                        <span
                                          class="fe fe-24 fe-x-circle pad5"
                                          onClick={removesection}

                                        ></span>{" "}
                                      </div>{" "}
                                    </div>
                                  ))}
                                </div>

                                {/* <input
         type="text" class="form-control" placeholder="Add Section"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
       
        <hr></hr>
      {item.map((itm, index) => (
        <p key={index}>{itm}</p>
      ))} */}
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
                                <div class="clearfix "></div>

                                <div class="form-group">
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
    </div>
  );
};

export default Step1;
