import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes,Switch } from "react-router-dom";
import Login from "../Auth/Login";

import Contact from "../Mainpages/Contact";
import Moderation from "../Mainpages/Moderation";
import Search_Result from "../Mainpages/Search_Result";
import Upload from "../Mainpages/Upload";
import Header from "./Header";
function Sidebar() {
  return (
    <div>
            <Header />
    <aside class="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar> <a href="#" class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle"> <i class="fe fe-x"><span class="sr-only"></span></i> </a>
    <nav class="vertnav navbar navbar-light"> 
      
      <ul class="navbar-nav flex-fill w-100 mb-2">
        <a href="#" class="logoout"><img src="assets/images/logo.png" class="logo2"/></a>
        <li class="nav-item dropdown"> <Link to="/app"> <img src="assets/images/icon1.png" class="iconlogo"/> <span class="ml-3 item-text">Dashboard</span> </Link> </li>
        <li class="nav-item dropdown"> <a href="#user" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link"> <img src="assets/images/icon2.png" class="iconlogo"/> <span class="ml-3 item-text">User</span> </a>
          <ul class="collapse list-unstyled pl-4 w-100" id="user">
            <li class="nav-item"> <Link to='#' class="nav-link pl-3"><span class="ml-1 item-text">Users</span></Link>  </li>
          </ul>
        </li>
        <li class="nav-item dropdown"> <a href="#Document" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link"> <img src="assets/images/icon3.png" class="iconlogo"/> <span class="ml-3 item-text">Document</span> </a>
          <ul class="collapse list-unstyled pl-4 w-100" id="Document">
            <li class="nav-item">  <Link to='/upload'  class="nav-link pl-3"><span class="ml-1 item-text">Upload</span></Link> </li>
            <li class="nav-item"> <Link to = "/Moderation" class="nav-link pl-3" href="#"><span class="ml-1 item-text">Moderation</span></Link> </li>
          </ul>
        </li>
        <li class="nav-item dropdown"> <a href="#subscription" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link"> <img src="assets/images/icon4.png" class="iconlogo"/> <span class="ml-3 item-text">Subscription</span> </a>
          <ul class="collapse list-unstyled pl-4 w-100" id="subscription">
            <li class="nav-item"> <a class="nav-link pl-3" href="#"><span class="ml-1 item-text">Client</span></a> </li>
            <li class="nav-item"> <a class="nav-link pl-3" href="#"><span class="ml-1 item-text">Consultant</span></a> </li>
          </ul>
        </li>
        <li class="nav-item dropdown"> <a href="#"  class="nav-link"> <img src="assets/images/icon5.png" class="iconlogo"/> <span class="ml-3 item-text">Settings</span> </a> </li>
        <li class="nav-item dropdown"> <Link to='/Search_Result' class="nav-link"> <img src="assets/images/icon6.png" class="iconlogo"/> <span class="ml-3 item-text">Search</span> </Link> </li>
      </ul>
    </nav>
  </aside>

    </div>
    );
}

export default Sidebar;
