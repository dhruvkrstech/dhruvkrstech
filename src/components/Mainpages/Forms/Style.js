// // 
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import Pagination from "react-js-pagination";
// import { useEffect, useState } from "react";


// const Style = () => {
//   const [data, setData] = useState([]);
//  const [ present, setPresent] = useState()
//   useEffect(() => {
//     let token = localStorage.getItem("token");

//     axios
//       .get("http://18.232.16.231/adeptlaws/index.php/api/admin-sub-sections",
//       {
//         headers: {
//           "Access-Control-Allow-Credentials": true,
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         console.log(response.data.data.data);

//         setData(response.data.data.data);
//       })
  
//   },[])

//   const handlePageChange = (pageNumber) => {
//     console.log(`active page is ${pageNumber}`);

//     console.log(`active page is ${pageNumber}`);
    
//     let token = localStorage.getItem("token");
//     axios
//       .get(
//         `http://18.232.16.231/adeptlaws/index.php/api/admin-sub-sections?page=${pageNumber}`,
//         {
//           headers: {
//             "Access-Control-Allow-Credentials": true,
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           console.log("perpage",response);
//           setData(response.data.data.data)
//         })
//   };

//     return (
//       <div className="App">
//         <p>React pagination test</p>
//         <tbody>
//           {data&&data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.section_name}</td>
//               <td>{item.main_parent}</td>
//             </tr>
//           ))}
//         </tbody>
//         <Pagination
//           activePage={present}
//           itemsCountPerPage={10}
//           totalItemsCount={450}
//           pageRangeDisplayed={""}
//           onChange={handlePageChange}
//         />

        
//       </div>
//     );
//   }


// export default Style
// import React from "react";


// let handleChange = e => {
//   var files = e.target.files;
//   var filesArray = [].slice.call(files);
//   filesArray.forEach(e => {
//     console.log(e.name);
//     console.log(e.size);
//     console.log(e.type);
//     console.log(e.lastModifiedDate);
//   });
// };

// const Style = () => {
//   return (
//     <div>
//       <h1>File Selector</h1>
//       <input type="file" onChange={e => handleChange(e)} />

//     </div>
//   );
// };

// export default Style;
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Style() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>
      </div>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Style;
