// import React,{useState} from 'react'
// import Tabs from 'react-bootstrap/Tabs'
// import Sidebar from '../Layout/Sidebar'
// import Tab from 'react-bootstrap/Tab'
// import Step1 from './Forms/Step1'
// import Step2 from './Forms/Step2'
// import Step3 from './Forms/Step3'
// import { SvgIcon } from '@material-ui/core'
// import GlobalContext from '../Global/GlobalContext'
// import NoteState from "../Global/NoteState"
// const Upload = () => {

//   return (

//     <div>
//       <Sidebar/>

//         <div role="main" class="main-content">
//         <Tabs
//   // defaultActiveKey="home"
//   // transition={true}
//   // id="noanim-tab-example"
//   // className="mb-3"
// >
//   <Tab eventKey="home" title="Step1">
//     <Step1 />
//   </Tab>
//   <Tab eventKey="profile" title="Step2">
//     <Step2 />
//   </Tab>
//   <Tab eventKey="contact" title="Step3">
//     <Step3 />
//   </Tab>
// </Tabs>
//     </div>

// </div>
//   )
// }

// export default Upload

import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Sidebar from "../Layout/Sidebar";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import axios from "axios";
import { Multi } from "./Forms/Multi";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Upload = () => {
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

  console.log(Final);
  const handleChangefordoc = (event) => {
    setDoctype_id(event.target.value);
  };

  const handleChangeforselectsection = (value) => {
    const secarray = [];
    for (let i = 0; i < value.length; i++) {
      secarray.push(value[i].value);
    }

    SetFinal(secarray);

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
        }).then(
          (response) => {
            let subsec = response.data
            console.log("subsec",subsec)
            let test = response.data.data;
            console.log(test);
            setNewData([test, ...secId]);
            console.log("setnew", setNewData);
          },
          (error) => {}
        );

      }
    });
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
        const actOptions = response.data.data.map(function (element) {
          return { value: element.id, label: element.name };
        });
        setMasterActs(actOptions);
      },
      (error) => {}
    );
  }, []);

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
      <Sidebar />

      <div role="main" class="main-content">
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 3</Tab>
          </TabList>

          <TabPanel>
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
                                            <label class="radio-inline">
                                              <input
                                                type="radio"
                                                name="optradio"
                                                value="Rule"
                                                onChange={handleChangefordoc}
                                              />
                                              Rule
                                            </label>
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
                                        <div class="form-group">
                                          <label for="customFile">
                                            Key Words
                                          </label>
                                          <div class="custom-file">
                                            <input
                                              type="text"
                                              required
                                              onChange={(e) =>
                                                setKeywords(e.target.value)
                                              }
                                            />
                                            <br></br>
                                          </div>
                                        </div>

                                        <div class="form-group">
                                          <label for="customFile">
                                            comments{" "}
                                          </label>
                                          <div class="custom-file">
                                            <input
                                              type="text"
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
          </TabPanel>
          <TabPanel>
          <select
  className="custom-select"
  onChange={(e) =>{
    const selectedsec=e.target.value;
    SetFinal(selectedsec);
  }}
  >
  <option value="steak">{Final}</option>
 
</select>
            <h1>{Final}</h1>









          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Upload;
