// import React from "react";
// import { render } from "react-dom";
// import { Router, Route, Link, Routes,Switch , BrowserRouter} from "react-router-dom";
// import Sidebar from "./components/Layout/Sidebar";


// import About from './components/Mainpages/Search_Result'
// import Contact from "./components/Mainpages/Contact";
// import Moderation from "./components/Mainpages/Moderation";
// import Search_Result from "./components/Mainpages/Search_Result";
// import Upload from "./components/Mainpages/Upload";
// import Login from "./components/Auth/Login";
// import Header from "./components/Layout/Header";
// function Main() {
//   return (
//     <div>
//      <Header/>



//     </div>
//     );
// }

// export default Main;

import { useState } from "react"
import Subsection from "./Subsection";
function Main(){

    const [inputFields, setInputFields] = useState([{
        section:'', Subsection:'',

    } ]);
 
//sub
const addInputFieldsub = ()=>{

  setInputFields([ {
    Subsection:'',
  } ])

}

    const addInputField = ()=>{

        setInputFields([...inputFields, {
            section:'',Subsection:'',
        } ])
      
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    
 
 
}
    return(
    
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {section, Subsection, salary}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={section} name="section" className="form-control"  placeholder="section" />
                    </div>
                    </div>
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={Subsection} name="subsection" className="form-control"  placeholder="subsection" />

                    <button className="btn btn-outline-success " onClick={addInputFieldsub}>Subsection New</button>

                    <div className="col">

                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>x</button>:''}
                  
                 
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">

                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">
                <div style={{ marginTop: 20 }}>{JSON.stringify(inputFields)}<br></br></div>

                </div>
            </div>
        
    )
}
export default Main
