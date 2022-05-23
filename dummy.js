import { useState } from "react";
import "./App.css";

function App() {
  const [SectionList, setSectionList] = useState([{ Section: "" }]);

  const handleSectionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...SectionList];
    list[index][name] = value;
    setSectionList(list);
  };

  const handleSectionRemove = (index) => {
    const list = [...SectionList];
    list.splice(index, 1);
    setSectionList(list);
  };

  const handleSectionAdd = () => {
    setSectionList([...SectionList, { Section: "" }]);
  };

  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="Section">Section(s)</label>
        {SectionList.map((singleSection, index) => (
          <div key={index} className="Sections">
            <div className="first-division">
              <input
                name="Section"
                type="text"
                id="Section"
                value={singleSection.Section}
                onChange={(e) => handleSectionChange(e, index)}
                required
              />
              {SectionList.length - 1 === index && SectionList.length < 4 && (
                <button
                  type="button"
                  onClick={handleSectionAdd}
                  className="add-btn"
                >
                  <span>Add a Section</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {SectionList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleSectionRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
        {SectionList &&
          SectionList.map((singleSection, index) => (
            <ul key={index}>
              {singleSection.Section && <li>{singleSection.Section}</li>}
            </ul>
          ))}
      </div>
    </form>
  );
}

export default App;