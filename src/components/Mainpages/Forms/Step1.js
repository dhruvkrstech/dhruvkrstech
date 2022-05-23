import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Sidebar from "../../Layout/Sidebar";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import axios from "axios";
import { Multi } from "./Multi";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Step1 = () => {
  let [masterStates, setMasterStates] = useState([]);
  let [selectedState, setSelectedState] = useState([]);
  let [stateId, setSelectedStateId] = useState([]);
  let [newValue, setNewvalue] = useState([]);
  // let [states, setSelectedState] = useState();
  const [act_type_id, setAct_type_id] = useState(null);
  let [masterActs, setMasterActs] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [comments, setComments] = useState("");
  // const [text, setText] = useState("");
  let [masterSections, setMasterSections] = useState([]);
  const [sections, setSections] = useState();
  const [selected, setSelected] = useState([]);

  const [secId, setSecId] = useState([]);
  const [newData, setNewData] = useState([]);
  const [Final, SetFinal] = useState([secId, newData]);
  const [doctype_id, setDoctype_id] = useState("");
  const [testValue, setTestvalue] = useState("");

  //step 2 states
  const [subsec, SsetSubsec] = useState("");

  console.log(Final);
  const handleChangefordoc = (event) => {
    setDoctype_id(event.target.value);
  };

  const handleChangeforselectsection = (value) => {
    setSections(value);

    value.map((newdrop) => {
      if (newdrop.__isNew__) {
        const postsection =
          "http://18.232.16.231/adeptlaws/index.php/api/admin-sections";
        let token = localStorage.getItem("token");
        const Payload = {
          name: newdrop.value,
        };
        console.log("paylod", Payload);
        axios({
          method: "POST",
          url: postsection,
          data: Payload,
          headers: {
            "Access-Control-Allow-Credentials": true,
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            let test = response.data.data;
            setTestvalue(test);
            console.log("testtt", test);
            setNewData([test, ...secId]);
            createNewHandle(value, test);
          })
          .catch((error) => {
            if (error.response.status === 401) {
              alert("name taken");
            }
          });
      }
    });
  };
  const createNewHandle = (value, test) => {
    console.log("valueee", value, "sxasdadasdaaw", test);
    const secarray = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i].value === value[i].label) {
        secarray.push(test);
      }

      secarray.push(value[i].value);
      const arr = secarray;

      const onlyNumbers = arr.filter((element) => typeof element === "number");
      console.log("onlyyyyynubers", onlyNumbers);
      SetFinal(onlyNumbers);
    }
  };
  useEffect(() => {
    const selecturl =
      "http://18.232.16.231/adeptlaws/index.php/api/select-sections";
    axios({
      method: "GET",
      url: selecturl,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': Bearer ${localStorage.token}
      },
    }).then(
      (response) => {
        const selection = response.data.data.map(function (element) {
          return { value: element.id, label: element.name };
        });
        setMasterSections(selection); //get in token
      },
      (error) => {}
    );

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
        // console.log(response)
        const actOptions = response.data.data.map(function (element) {
          return { value: element.id, label: element.name };
        });
        setMasterActs(actOptions);
      },
      (error) => {}
    );
  }, [Final]);

  const statesHandler = function (selectedItems) {
    const teststate = [];
    for (let i = 0; i < selectedItems.length; i++) {
      teststate.push(selectedItems[i].value);
    }
    let selectedState = selectedItems.map(function (element) {
      return { value: element.value, label: element.label };
    });
    setSelectedState(selectedState);
    setSelectedStateId(teststate);
  };

  // handle selection act
  const handleChangeforAct = (value) => {
    setAct_type_id(value.value);
  };

  //form handler
  const history = useHistory();

  const handleSubmitform = (event) => {
    event.preventDefault();
    let payload = {
      states: stateId,
      sections: Final,
      act_type_id: act_type_id,
      keywords: keywords,
      comments: comments,
      document_type: doctype_id,
    };

    console.log("payload", payload);
    let token = localStorage.getItem("token");
    const apiUrl =
      "http://18.232.16.231/adeptlaws/index.php/api/admin-document-first-step";
    axios({
      method: "POST",
      data: payload,
      url: apiUrl,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(
      (response) => {
        if (response.status === 200) {
          history.push("*");
        }
        const sectionOptions = response.data.sections.map(function (element) {
          return { value: element.id, label: element.name };
        });
        setMasterSections(sectionOptions); //get in token
        localStorage.setItem("setMasterSections", response.data.sections);
      },
      (error) => {}
    );

    //step2
  };

  return (
    <div>
    

      <div role="main" >
     
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
                                          <Multi
                                            options={masterStates}
                                            value={selectedState}
                                            onChange={statesHandler}
                                          />
                                          {/* <Select
                                    placeholder="States"
                                    isMulti
                                    onChange={statesHandler}
                                    options={masterStates}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                  /> */}
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
                                          {/* <label for="customFile">
                                          Add Sections
                                        </label> */}
                                          <div class="form-check form-check-inline">
                                            <label class="radio-inline">
                                              <input
                                                type="radio"
                                                name="optradio"
                                                value="Section"
                                                onChange={handleChangefordoc}
                                              />
                                              Section
                                            </label>
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            <label class="radio-inline">
                                              <input
                                                type="radio"
                                                name="optradio"
                                                value="Rule"
                                                onChange={handleChangefordoc}
                                              />
                                              Rule
                                            </label>
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            <label class="radio-inline">
                                              <input
                                                type="radio"
                                                name="optradio"
                                                value="Para"
                                                onChange={handleChangefordoc}
                                              />
                                              Para
                                            </label>
                                          </div>
                                        </div>
                                        <CreatableSelect
                                          isMulti
                                          name="india"
                                          onChange={
                                            handleChangeforselectsection
                                          }
                                          options={masterSections}
                                        />
                                       <br></br>
                                        <div class="form-group">
                                          <label for="customFile">
                                            Key Words
                                          </label>
                                          <div class="custom-file">
                                            <input
                                              type="text"
                                              class="form-control"

                                              required
                                              onChange={(e) =>
                                                setKeywords(e.target.value)
                                              }
                                            />
                                          </div>
                                        </div>

                                        <div class="form-group">
                                          <label for="customFile">
                                            comments{" "}
                                          </label>
                                          <div class="custom-file">
                                            <input
                                              type="text"
                                              class="form-control"

                                              required
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
        
          <div>
            
            </div>
         
      </div>
    </div>
  );
};

export default Step1;
