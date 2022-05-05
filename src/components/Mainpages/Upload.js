import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Sidebar from '../Layout/Sidebar'
import Tab from 'react-bootstrap/Tab'
import Text from './Text'
import { SvgIcon } from '@material-ui/core'
const Upload = () => {
  const mystyle = {
    color: "white",
   margintop:"500px",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (

    <div>
      <Sidebar/>
  <form>
        <div role="main" class="main-content">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Step1">
    <Text />
  </Tab>
  <Tab eventKey="profile" title="Step2">
    <Text />
  </Tab>
  <Tab eventKey="contact" title="Step3">
    <Text />
  </Tab>
</Tabs>
    </div>
      </form>
</div>
  )
}

export default Upload