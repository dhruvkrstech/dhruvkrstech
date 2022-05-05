import React from 'react';
import { useState } from 'react';

const SubSection = (props) => {    
    const { section} = props;

    const [Subsection, setSubsection] = useState({ val: []});

    function createInputs() {
        return Subsection.val.map((el, i) =>
          <div key={i}>
            <input type="text" value={el||''}   class="form-control" onChange={handleChange.bind(i)} />
            <input type='button' value='remove' name={i} onClick={removeClick.bind(i)} />
          </div>
        );
      }

    function handleChange(event) {
      let vals = [...Subsection.val];
      vals[this] = event.target.value;
      setSubsection({ val: vals });
    }

    const addClick = () => {
      setSubsection({ val: [...Subsection.val, '']})
    }

    const removeClick = (event) => {
      let vals = [...Subsection.val];
      let index = Number(event.target.name);
      vals.splice(index, 1);
      setSubsection({ val: vals });
    }

    const handleSubmit = event => {
      //alert('A name was submitted: ' + Subsection.val.join(', '));
      event.preventDefault();
      console.log('A name was submitted: ' + JSON.stringify(Subsection));
    }



    return (      
      <>
          {createInputs()}
          <input type='button' value='Add Subsection' onClick={addClick} />         
      </>
    )

}

export default SubSection;