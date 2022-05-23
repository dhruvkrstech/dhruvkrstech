import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
import Select from "react-select";
import ReactPaginate from "react-paginate";
import axios from "axios";
import GlobalContext from "../../Global/GlobalContext";
import { First } from "../../Global/NoteState";

const Step2 = () => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [masterSections, setMasterSections] = useState([]);
  const [sectionId, setSelectedSectionId] = useState();
  // const[selectedsec,setSelectedsec] = useState([])
  const [subsection, setSubsection] = useState("");
  const [SelectSubsection, setSelectSubsection] = useState("");
  const [subsectionid, setSubsectionid] = useState(null);
 const [subsubsection,setSubsubsection] = useState();
  //pagination states
  const [data, setData] = useState([]);
  const [subdata, setSubData] = useState("");
  const [present, setPresent] = useState();

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);

    console.log(`active page is ${pageNumber}`);

    let token = localStorage.getItem("token");
    axios
      .get(
        `http://18.232.16.231/adeptlaws/index.php/api/admin-sub-sections?page=${pageNumber}`,
        {
          headers: {
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // console.log("perpage", response);
        setData(response.data.data.data);
      });
  };

  //section handler
  const sectionhandler = function (selectedItems) {
    console.log(selectedItems.value);

    setSelectedSectionId(selectedItems.value);
  };

  const handleChangeforSubsec = (value) => {
    setSubsectionid(value.value);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");

    axios
      .get("http://18.232.16.231/adeptlaws/index.php/api/admin-sub-sections", {
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          console.log(response);
          const suboption = response.data.data.data.map(function (element) {
            return { value: element.id, label: element.name };
          });
          console.log("sunoptio", suboption);
          setSelectSubsection(suboption);
        },
        (error) => {}
      );

    // let token = localStorage.getItem("token");

    axios
      .get("http://18.232.16.231/adeptlaws/index.php/api/admin-sub-sections", {
        headers: {
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data.data.data);
        // console.log("subb",response.data.data.data.section_name);
        console.log(response.data.data.data);

        setData(response.data.data.data);
      });

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
        setMasterSections(selection);
      },
      (error) => {}
    );
  }, []);

  const history = useHistory();

  const handleSubmitform = (event) => {
    event.preventDefault();

    var parent = 0;

    if (subdata > 0) {
      alert("test");
    } else {
      console.log("empty");
    }

    let payload = {
      name: subsection, //string
      parent_of: parent, //child 0 or id of child
      main_parent: sectionId, /// section - id
    };

    console.log("payload", payload);
    let token = localStorage.getItem("token");
    const apiUrl =
      "http://18.232.16.231/adeptlaws/index.php/api/admin-sub-sections";
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
          console.log("response", response);
          setSubData(response.data.data);
          // history.push("*");
        }
      },
      (error) => {}
    );
  };


  const handleSubmitnext = (event) => {
    event.preventDefault();

   

    let payload = {
      name: subsubsection, //string
      parent_of: subsectionid, //child 0 or id of child
      main_parent: sectionId, /// section - id
    };

    console.log("payload", payload);
    let token = localStorage.getItem("token");
    const apiUrl =
      "http://18.232.16.231/adeptlaws/index.php/api/admin-sub-sections";
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
          console.log("response", response);
          // history.push("*");
        }
      },
      (error) => {}
    );
  };

  return (
    <div>
      <div role="main">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="row align-items-center mb-2">
                  <div class="col">
                    {/* <h2 class="h5 page-title">Add Category</h2> */}
                  </div>
                  <div class="col-auto">
                    {" "}
                    <a href="#">Dashboard </a> / Step2{" "}
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 col-lg-12">
                    <div class="card shadow">
                      <div class="card-header">
                        {" "}
                        <strong class="card-title">Step2</strong>{" "}
                      </div>
                      <div class="row">
                        <div class="col-md-12 ">
                          <div class="">
                            <div class="card-body">
                            <form onSubmit={handleSubmitform}>

                              <div class="col-md-6 mb-5">
                                <div class="form-group">
                                  <label>Select Section</label>

                                  <Select
                                    placeholder="Sections"
                                    onChange={sectionhandler}
                                    options={masterSections}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                  />
                                </div>
                                <div class="form-group">
                                  <label>Add sub section name</label>
                                  <input
                                    type="text"
                                    required
                                    class="form-control"
                                    onChange={(e) =>
                                      setSubsection(e.target.value)
                                    }
                                  />
                                </div>

                                <div class="clearfix "></div>

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
                              </form>



                              <div class="">
                                <div class="row tableoverflow">
                                  <div class="col-md-12 ">
                                    <div class="">
                                      <div class="">
                                        <table class="table">
                                          <thead class="thead-dark">
                                            <tr>
                                              <th>Section name </th>
                                              <th></th>
                                              <th>&nbsp;</th>
                                            </tr>
                                          </thead>
                                          {data.map((item) => (
                                            <tbody>
                                              <tr
                                                class="accordion-toggle collapsed"
                                                id="c-3599"
                                                data-toggle="collapse"
                                                data-parent="#c-3599"
                                                href="#collap-3599"
                                              >
                                                <td class="w77">
                                                  {item.section_name}
                                                </td>
                                                <td class="porelative w33">
                                                  <div class="iconouter">
                                                    {" "}
                                                    {/* <Button
                                                      variant="primary"
                                                      onClick={handleShow}
                                                    >
                                                      +
                                                    </Button> */}
                                                    {/* <span
                                                      class="fe fe-16 fe-edit-2 borderbox"
                                                      alt="Add Category "
                                                    ></span> */}{" "}
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
                                                            {item.name}
                                                          </div>
                                                          <div class="iconouter">
                                                            {" "}
                                                            <Button
                                                              variant="primary"
                                                              onClick={
                                                                handleShow
                                                              }
                                                            >
                                                              +
                                                            </Button>
                                                            <Modal
                                                              show={showModal}
                                                              onHide={
                                                                handleClose
                                                              }
                                                            >
                                                              <Modal.Header
                                                                closeButton
                                                              >
                                                                <Modal.Title>
                                                                  Enter
                                                                  Subsections
                                                                </Modal.Title>
                                                              </Modal.Header>
                                                              <Modal.Body>
                                                                <form onSubmit={handleSubmitnext}>
                                                                <Select
                                                                  placeholder="Sections"
                                                                  onChange={
                                                                    sectionhandler
                                                                  }
                                                                  options={
                                                                    masterSections
                                                                  }
                                                                  className="basic-multi-select"
                                                                  classNamePrefix="select"
                                                                />

                                                                <br></br>
                                                                <Select
                                                                  placeholder="Subsections"
                                                                  onChange={
                                                                    handleChangeforSubsec
                                                                  }
                                                                  options={
                                                                    SelectSubsection
                                                                  }
                                                                  classNamePrefix="select"
                                                                />
                                                                <br></br>
                                                                <div class="form-group">
                                  <label>Add sub Sub section name</label>
                                  <input
                                    type="text"
                                    required
                                    class="form-control"
                                    onChange={(e) =>
                                      setSubsubsection(e.target.value)
                                    }
                                  />
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
                                </form>
                                                              </Modal.Body>
                                                              <Modal.Footer>
                                                                <Button
                                                                  variant="secondary"
                                                                  onClick={
                                                                    handleClose
                                                                  }
                                                                >
                                                                  Close
                                                                </Button>
                                                            
                                                              </Modal.Footer>
                                                            </Modal>
                                                            {/* <span
                                                              class="fe fe-16 fe-edit-2 borderbox"
                                                              alt="Add Category "
                                                            ></span> */}{" "}
                                                            <span class="fe fe-16 fe-trash-2 borderbox"></span>
                                                          </div>
                                                        </div>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          ))}

                                          <div className="pagination-background">
                                            <Pagination
                                              activePage={present}
                                              itemsCountPerPage={""}
                                              totalItemsCount={450}
                                              pageRangeDisplayed={"10"}
                                              onChange={handlePageChange}
                                            />
                                          </div>
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
              </div>
            </div>
          </div>

        {/* <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.section_name}</td>
                <td>{item.main_parent}</td>
              </tr>
            ))}
        </tbody> */}

        <br></br>
      </div>
    </div>
  );
};

export default Step2;
