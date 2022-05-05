import { useState } from "react";

import SubSection from "./components/Mainpages/SubSection";
import axios from "axios";
import AsyncSelect from 'react-select/async';

const Test = (props) => {

 const [keywords, setKeywords]=useState("")
 const [comments ,setComments]=useState("")


  const [values, setValues] = useState([]);
  function createInputs() {
    return values.map((el, i) =>
      <div key={i}>
      
        <input type="text" value={el||''} onChange={handleChange.bind(i)} />
        <input type='button' value='remove' name={i} onClick={removeClick.bind(i)} />
        <div style={{width: '80%', marginLeft: '25px', padding: '5px', border: '1px solid #000'}}>
          <SubSection section={el} />
        </div>  
             
      </div>
    );
  }

function handleChange(event) {
  let vals = [...values];
  vals[this] = event.target.value;
  setValues(vals);
}

const addClick = () => {
  setValues([...values, ''])
}

const removeClick = (event) => {
  let vals = [...values.val];
  let index = Number(event.target.name);
  vals.splice(index, 1);
  setValues(vals);
}

const handleSubmit = event => {
  //alert('A name was submitted: ' + values.val.join(', '));
  event.preventDefault();
  console.log('A name was submitted: ' + JSON.stringify(values));
}




let formData={
  values: '',
  SubSection: '',
}









const [sectionname,setSectionname] = useState("");
const handleInputChangeforsection = value => {
  setSectionname(value);
};


// handle selection section
const handleChangeforsection = value => {
  setSectionname(value);
}
 //statesss
 const [states, setstates] = useState([]);
 const [inputValuestate, setValuestate] = useState('');
 const [selectedstate, setSelectedState] = useState(null);

 // handle input change event for state
 const handleInputChangeforstate = value => {
   setValuestate(value);
 };

 // handle selection state
 const handleChangeforstate = value => {
   setSelectedState(value);
 }

 const fetchDatastate = () => {
   return  axios.get('http://18.232.16.231/adeptlaws/index.php/api/select-states').then(result => {
     const res =  result.data.data;
     return res;
   });
 }


  const [acts, setActs] = useState([]);
  const [inputValue, setValueact] = useState('');
  const [selectedAct, setSelectedAct] = useState(null);
   // handle input change event for act
   const handleInputChangeforAct = value => {
    setValueact(value);
  };
 
  // handle selection act 
  const handleChangeforAct = value => {
    setSelectedAct(value);
  }
 
  const fetchDataAct = () => {
    return  axios.get('http://18.232.16.231/adeptlaws/index.php/api/select-acts').then(result => {
      const res =  result.data.data;
      return res;
    });
  }
 
 

    const [doc, setdoc] = useState([]);
    const [inputdoc, setDoc] = useState('');
    const [selecteddoc, setselecteddoc] = useState(null);
   
    // handle input change event for doc
    const handleInputChangefordoc = value => {
      setDoc(value);
    };
   
    // handle selection for doc
    const handleChangefordoc = value => {
      setselecteddoc(value);
    }
   
    const fetchData = () => {
      return  axios.get('http://18.232.16.231/adeptlaws/index.php/api/select-document-typies').then(result => {
        const res =  result.data.data;
        return res;
      });
    }
   

  const [section, setsection] = useState([{ section: "" }]);

  const handlesectionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...section];
    list[index][name] = value;
    setsection(list);
  };

  const handlesectionRemove = (index) => {
    const list = [...section];
    list.splice(index, 1);
    setsection(list);
  };

  const handlesectionAdd = () => {
    setsection([...section, { section: "" }]);
  };





 
  // const [selectedOption, setSelectedOption] = useState(null);
 
  // // handle onChange event of the dropdown
  // const handleChange = e => {
  //   setSelectedOption(e);
  // }





  //pdf
  const [pdfFile, setPdfFile]=useState(null);
  const [pdfFileError, setPdfFileError]=useState('');

  // for submit event
  const [viewPdf, setViewPdf]=useState(null);

  // onchange event
  const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              setPdfFileError('');
            }
      }
      else{
        setPdfFile(null);
        setPdfFileError('Please select valid pdf file');
      }
    }
    else{
      alert('select your file');
    }
  }



  // form submit
  const handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    if(pdfFile!==null){
      setViewPdf(pdfFile);
    }
    else{
      setViewPdf(null);
    }
  }


  // form logic

 let items ={sectionname,selectedstate,values,pdfFile,selectedAct,selecteddoc}
console.log(items)

const register = async e =>{

  e.preventDefault()
  let token=localStorage.getItem("firstLogin");

        try {
            await axios.post('http://18.232.16.231/adeptlaws/index.php/api/admin-documents', items ,
             { headers: {"Authorization" : `Bearer ${token}`} } )
            // props.history.push('/app/*')
            window.location.href = "/app";



        } catch (err) {
         alert(err)}
    }

  return (
   
    <div>
      <form onSubmit={register}>
          <div role="main" class="main-content">
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="row align-items-center mb-2">
          <div class="col">
            <h2 class="h5 page-title">Upload</h2>
          </div>
          <div class="col-auto"> <a href="#" >Dashboard </a> /  Upload document </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="card shadow">
              <div class="card-header"> <strong class="card-title">Upload document</strong> </div>
              <div class="row">
                <div class="col-md-12 ">
                  <div class="">
                    <div class="card-body">
                      <div class="col-md-6">
                        <div class="form-group mb-4">
                          <label >State</label>
       <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions
        value={selectedstate}
        getOptionLabel={e => e.name}
        getOptionValue={e => e.id}
        loadOptions={fetchDatastate}
        onInputChange={handleInputChangeforstate}
        onChange={handleChangeforstate}
      />
                          <span class="subinputtext">Choose state or multiple state</span> </div>
                        <div class="form-group mb-4">
                          <label>Act type</label>
        <AsyncSelect
        
        cacheOptions
        defaultOptions
        value={selectedAct}
        getOptionLabel={e => e.name}
        getOptionValue={e => e.id}
        loadOptions={fetchDataAct}
        onInputChange={handleInputChangeforAct}
        onChange={handleChangeforAct}
      />
                        </div>
                        <div class="form-group mb-4">
                          <label>Type of document</label>
                          <AsyncSelect
        cacheOptions
        defaultOptions
        value={selecteddoc}
        getOptionLabel={e => e.name}
        getOptionValue={e => e.id}
        loadOptions={fetchData}
        onInputChange={handleInputChangefordoc}
        onChange={handleChangefordoc}
      />
                        </div>
                        <div class="form-group mb-4">
                          {/* <label >Section name</label> */}
                          <>
          {createInputs()}
          <input type='button'    class="btn mb-2 btn-light float-left" value='Add section' onClick={addClick} />         
      </>
      <br></br>
                        </div>
     
                        <div class="form-group mb-4">
                        </div>
                        <div class="form-group">
                          <label for="customFile">Key Words</label>
                          <div class="custom-file">
                          <input type="text" className='form-control'
                           class="custom-file-label"
onChange={(e)=>setKeywords(e.target.value)}/>
        <br></br>
    
                          </div>
                        </div>

                        <div class="form-group">
                          <label for="customFile">comments </label>
                          <div class="custom-file">
                          <input type="text" className='form-control'
                           class="custom-file-label"
onChange={(e)=>setComments(e.target.value)}/>
        <br></br>
    
                          </div>
                        </div>
                        <div class="form-group mb-3">
                          {/* <button type="button" class="btn mb-2 btn-light float-right">+ Add sub section</button> */}
                        </div>
                        <div class="clearfix "></div>
                        <div class="form-group">
                          <label for="customFile">Upload document</label>
                          <div class="custom-file">
                          <input type="file" className='form-control'
                           class="custom-file-label" for="customFile"
          required onChange={handlePdfFileChange}
        />
        {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
        <br></br>
    
                          </div>
                        </div>
                        <div class="form-group ">
                          <button class="btn btn-lg btn-primary float-right mb-6" type="submit" name="submit">Submit</button>
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

<div class="modal fade" id="verticalModal" tabindex="-1" role="dialog" aria-labelledby="verticalModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="verticalModalTitle">Section 1 </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>
      <div class="modal-body"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui urna, cursus mollis cursus vitae, fringilla vel augue. In vitae dui ut ex fringilla consectetur. Sed vulputate ante arcu, non vehicula mauris porttitor quis. Praesent tempor varius orci sit amet sodales. Nullam feugiat condimentum posuere. Vivamus bibendum mattis mi, vitae placerat lorem sagittis nec. Proin ac magna iaculis, faucibus odio sit amet, volutpat felis. Proin eleifend suscipit eros, quis vulputate tellus condimentum eget. Maecenas eget dui velit. Aenean in maximus est, sit amet convallis tortor. In vel bibendum mauris, id rhoncus lectus. Suspendisse ullamcorper bibendum tellus a tincidunt. Donec feugiat dolor lectus, sed ullamcorper ante rutrum non. Mauris vestibulum, metus sit amet lobortis fringilla, dui est venenatis ligula, a euismod sem augue vel lorem. Nunc feugiat eget tortor vel tristique. Mauris lobortis efficitur ligula, et consectetur lectus maximus sed. </div>
      <div class="modal-footer">
        <button type="button" class="btn mb-2 btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade modal-notif modal-slide" tabindex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="defaultModalLabel">Notifications</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>
      <div class="modal-body">
        <div class="list-group list-group-flush my-n3">
          <div class="list-group-item bg-transparent">
            <div class="row align-items-center">
              <div class="col"> <small><strong>Notifications</strong></small>
                <div class="my-0 text-muted small">notification here</div>
                <small class="badge badge-pill badge-light text-muted">1m ago</small> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">Clear All</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Test