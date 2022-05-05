import React, { useState } from "react";

function Kaka() {
  const [inputList, setInputList] = useState([{ section: "",}]);
  const [subsection, setsubsection] = useState([{ Subsection: "" }]);

//
const handleInputSubsection = (e, index) => {
  const { name, value } = e.target;
  const list = [...subsection];
  list[index][name] = value;
  setsubsection(list);
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

  const addsubsection = () => {
    console.log(subsection)
    setsubsection([...subsection, {Subsection: "",}]);
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
            {/* <input
              className="ml10"
              name="Subsection"
              placeholder="Enter subsection"
              value={x.Subsection}
              onChange={e => handleInputChange(e, i)}
            /> */}
            <br>
            </br>

            {subsection.map((x, i) => {
        return (
          <div className="box">
            <input
              className="ml10"
              name="Subsection"
              placeholder="Enter subsection"
              value={x.Subsection}
              onChange={e => handleInputSubsection(e, i)}
            />
            <br>
            </br>
            <button onClick={addsubsection}>Addsubsection</button>        
            <br>
            </br> <br>
            </br> 
               <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}

            {/* <button onClick={addsubsection}>Addsubsection</button>         */}
            <br>
            </br> <br>
            </br> 
               <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}<br></br></div>
    </div>
  );
}

export default Kaka;