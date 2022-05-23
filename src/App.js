import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Login from "./components/Auth/Login";
import About from "./components/Mainpages/Search_Result";
import Contact from "./components/Mainpages/Contact";
import Moderation from "./components/Mainpages/Moderation";
import Search_Result from "./components/Mainpages/Search_Result";
import Upload from "./components/Mainpages/Upload";
import { Fragment } from "react";
import Dashboard from "./components/Layout/Dashboard";
import Main from "./Main";
import Nopage from "./Api/Nopage";
import Header from "./components/Layout/Header";
import PrivateRoute from './Api/PrivateRoute'
// import { upload } from "@testing-library/user-event/dist/upload";
import NoteState from "./components/Global/NoteState";
const App = () => {
  return (
    <Router>

      <Switch>
    
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/app" component={Dashboard} />

        <PrivateRoute exact path="/upload" component={Upload} />
        <PrivateRoute exact path="/contact" component={Contact} />
        <PrivateRoute exact path="/Search_Result" component={Search_Result} />
        <PrivateRoute exact path="/moderation" component={Moderation} />

        {/* <Route exact path="*" component={Nopage} /> */}
   
      </Switch>
    </Router>
  );
};

export default App;
