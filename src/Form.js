import { useState } from "react";

const Form = () => {

  const [subsection, setsubsection] = useState([{ subsection: "" }]);

  const [sectionlist, setSectionList] = useState([{ section: "" }]);

  const handlesubsectionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...subsection];
    list[index][name] = value;
    setsubsection(list);
  };

  const handlesubsectionRemove = (index) => {
    const list = [...subsection];
    list.splice(index, 1);
    setsubsection(list);
  };

  const handlesubsectionAdd = () => {
    setsubsection([...subsection, { subsection: "" }]);
  };


  const handlesectionchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...subsection];
    list[index][name] = value;
    setSectionList(list);
  };

  const handlesectionremove = (index) => {
    const list = [...sectionlist];
    list.splice(index, 1);
    setSectionList(list);
  };

  const handlesectionadd = () => {
    setSectionList([...sectionlist, { section: "" }]);
  };
  return (
    <div>
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
                          <select class="form-control select2-multi" id="multi-select2">
                            <optgroup>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            </optgroup>
                          </select>
                          <span class="subinputtext">Choose state or multiple state</span> </div>
                        <div class="form-group mb-4">
                          <label>Act type</label>
                          <select class="form-control select2" id="simple-select2">
                            <optgroup>
                            <option value="1">Act type 1</option>
                            <option value="1">Act type 2</option>
                            </optgroup>
                          </select>
                        </div>
                        <div class="form-group mb-4">
                          <label>Type of document</label>
                          <select class="form-control select2" id="simple-select2">
                            <optgroup>
                            <option value="1">document 1</option>
                            <option value="1">document 2</option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="form-field">
        <label htmlFor="subsection">subsection </label>
        {subsection.map((singlesubsection, index) => (
          <div key={index} className="subsections">
            <div className="first-division">
              <input
                name="subsection"
                type="text"
                id="subsection"
                class="form-control"
                value={singlesubsection.subsection}
                onChange={(e) => handlesubsectionChange(e, index)}
                required
              />
              {subsection.length - 1 === index && subsection.length < 4 && (
                <button
                  type="button"
                  onClick={handlesubsectionAdd}
                  class="btn mb-2 btn-light float-right"
                >
                  <span>Add a subsection</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {subsection.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handlesubsectionRemove(index)}
                  class="btn mb-2 btn-light"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
  
        {subsection &&
          subsection.map((singlesubsection, index) => (
            <ul key={index}>
              {singlesubsection.subsection && <li>{singlesubsection.subsection}</li>}
            </ul>
          ))}
      </div>
                        <div class="form-group mb-4">
                          <label >Sub section name</label>
                        </div>
                        <div className="form-field">
        <label htmlFor="subsection">subsections </label>
        {sectionlist.map((singlesection, index) => (
          <div key={index} className="subsections">
            <div className="first-division">
              <input
                name="subsection"
                type="text"
                class="form-control"
                id="subsection"
                value={singlesection.subsection}
                onChange={(e) => handlesectionchange(e, index)}
                required
              />
              {sectionlist.length - 1 === index && sectionlist.length < 4 && (
                <button
                  type="button"
                  onClick={handlesectionadd}
                  class="btn mb-2 btn-light float-right"
                >
                  <span>Add a subsection</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {sectionlist.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handlesectionremove(index)}
                  class="btn mb-2 btn-light"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
      
        {sectionlist &&
          sectionlist.map((singlesection, index) => (
            <ul key={index}>
              {singlesection.section && <li>{singlesection.section}</li>}
            </ul>
          ))}
      </div>
                        <div class="clearfix "></div>
                        <div class="form-group">
                          <label for="customFile">Upload document</label>
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile"/>
                            <label class="custom-file-label" for="customFile">Choose file</label>
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

export default Form