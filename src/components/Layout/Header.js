import React from 'react'
import axios from 'axios'
const Header = () => {

  const logoutUser = async () =>{
    localStorage.removeItem('token', true)
        
    window.location.href = "/";
}


  return (
    <div>
         <nav class="topnav navbar navbar-light">
    <button type="button" class="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar"> <i class="fe fe-menu navbar-toggler-icon"></i> </button>
    <ul class="nav">
      <li class="nav-item nav-notif"> <a class="nav-link text-muted my-2" href="/" data-toggle="modal" data-target=".modal-notif"> <span class="fe fe-bell fe-16"></span> <span class="dot dot-md bg-success"></span> </a> </li>
      <li class="nav-item mar7 dropdown "> <a class="nav-link dropdown-toggle text-muted pr-0" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="avatar avatar-sm mt-2"> <span class="fe fe-16 fe-settings"></span> </span> </a>
        <div class="dropdown-menu dropdown-menu-right top20" aria-labelledby="navbarDropdownMenuLink">
           <a class="dropdown-item" href="#">Profile</a> <button onClick={logoutUser} class="dropdown-item" href="#">Logout</button> </div>
      </li>
    </ul>
  </nav>
  </div>
  )
}

export default Header