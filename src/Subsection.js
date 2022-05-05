import React, { useState } from "react";

function Subsection() {
  const [inputList, setInputList] = useState([{ section: ""}]);
  const [Subsection, setSubsection] = useState([{ Subsection: ""}]);


  //subsec
  const handleInputChangeforsubsec = (e, index) => {
    const { name, value } = e.target;
    const list = [...Subsection];
    list[index][name] = value;
    setSubsection(list);
  };

  // handle click event of the Remove button
  const handleRemoveClickforsubsec = index => {
    const list = [...Subsection];
    list.splice(index, 1);
    setSubsection(list);
  };

  // handle click event of the Add button
  const handleAddClickforsubsec = () => {
    setSubsection([...Subsection, { Subsection: "" }]);
  };


  
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { section: "" }]);
  };


  

  return (
    <div className="App">
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="section"
              placeholder="Enter section"
              value={x.section}
              onChange={e => handleInputChange(e, i)}
            /> 
        
  <input
              className="ml10"
              name="Subsection"
              placeholder="Enter subsection"
              value={x.Subsection}
              onChange={e => handleInputChange(e, i)}
            />

             {/* <button onClick={addsubsection}
             class="btn mb-2 btn-light"
            >Addsubsection</button>         */}
          
              <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}

      
{Subsection.map((y, i) => {
        return (
          <div className="box">
            <input
              name="section"
              placeholder="Enter section"
              value={y.Subsection}
              onChange={e => handleInputChangeforsubsec(e, i)}
            />
    
            {/* <button onClick={addsubsection}
             class="btn mb-2 btn-light"
            >Addsubsection</button>         */}
        
       
            <div className="btn-box">
              {Subsection.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClickforsubsec(i)}>Remove</button>}
              {Subsection.length - 1 === i && <button onClick={handleAddClickforsubsec}>Add Subsection</button>}
            </div>
          </div>
        );
      })}

      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default Subsection;

// section: [{"s1":[s11,s12,s13]}, {"s2":[s21,s22]}, {"s2":[]}]

