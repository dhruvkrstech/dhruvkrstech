
// import axios from 'axios'
// import React from 'react'

// const Login = (props) => {

// const submitHandler = (event,) => {
//   event.preventDefault();
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   const data = {email,password}
//   axios
//   .post("http://18.232.16.231/adeptlaws/index.php/api/admin-login", {...data}) 
//   .then((res) => {
//     if(res.status === 200) {
//     console.log("success")
//     props.history.push('/app')
//     } else if(res.status === 403) {
//       console.log("failureee")
//     } else {
//       console.log("failuree")
//     }

//   })

//   .catch((error) => { 

//     if (error.response.status === 401) {
//      alert('Incorrect id and password ');
//       }  
//   })

 
 
// }
//   return (
//     <div>

// <form onSubmit={submitHandler}>
// <input type="text" name="email" placeholder='email'/>
// <input type = "text" name="password" placeholder='password'></input>
// <button type ="submit">submit</button>
// </form>



//     </div>
//   )
// }

// export default Login






import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {useHistory} from 'react-router-dom';

const Login = (props) => {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const history = useHistory();

    const loginSubmit = e =>{
      
        e.preventDefault()

     const apiUrl = "http://18.232.16.231/adeptlaws/index.php/api/admin-login" ;
    axios({
      method: "POST",
      url: apiUrl,
      data:user,
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': Bearer ${localStorage.token}
      },
    }).then(res=>{
    if(res.status===200) {
      history.push("/app")

      localStorage.setItem('token', res.data.token)
    }
 else
    alert(res?.message)

           })

           .catch((error) => { 

            if (error.response.status === 401) {
              alert("Invalid Email-ID or Password");
              }  
          })
    }

    console.log(user)


    const myStyle={
      backgroundImage:"url(" +
      "assets/images/loginbg.jpg"+")",
    };

  return (


   <div class="wrapper vh-100" style={myStyle}>
    <div class="header">
      <div class="container">
        <div class="col-md-6"> <img src="assets/images/logo.png" class="logoimg"/> </div>
      </div>
    </div>
    <div class="container pad30">
      <div class="row ">
        <div class="col-md-8">
          <h2 class="text1">Let Our Experience <br></br>
            be Your Guide</h2>
          <h5 class="text2"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>
            Lorem Ipsum has been the industry's </h5>
        </div>
        <div class="col-md-4">
          <form class="logibox"  onSubmit={loginSubmit}>
            <div class="clearfix"></div>
            <h1 class="h6 logintext">Hello ! <br></br>
              Good Morning </h1>
            <h2 class="logintext"><strong>Login</strong> your Account</h2>
            <div class="formmain">
              <div class="form-group">
              <label for="inputEmail" class="sr-only">Email address</label>

              <input type="email" name="email"  class="textbox5"
                 placeholder="Email" value={user.email} onChange={onChangeInput} />
                 </div>    
              <div class="form-group">
              <label for="inputPassword" class="sr-only" >Password</label>

                 <input type="password" name="password"  class="textbox5"
                 placeholder="Password" value={user.password} onChange={onChangeInput} />
              </div>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" name="submit">Login</button>
          </form>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Login



// import React, {useEffect}from 'react'
// import { useState } from 'react/cjs/react.development';
// import { useHistory } from 'react-router-dom';
// import auth from '../../Api/Auth';
// const Login = (props) => {
//     const [email,setEmail]= useState("")
//     const[password,setPassword] = useState("")
//     const history =  useHistory();
//     useEffect(() => {
//     if (localStorage.getItem('user-info')) {
//     history.push("/app")
//     }
//     }, [])
//  async function login(){
//    console.warn(email,password)  
//    let  item = {email,password};
//    let result = await fetch ("http://18.232.16.231/adeptlaws/index.php/api/admin-login",{
//        method:'post',
//        header :{
// "Content-Type":"application/json",
// "Accept": "application/json"
//        },
//        body:JSON.stringify(item)
//    });
//  result = await result.json()
//  localStorage.setItem("user-info",JSON.stringify(result))
//  history.push("/app")

//  }
     
//     return (
// <div>
//     <h1>login</h1>
//     <form>
//     <input type = "text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>

//     <input type = "text" placeholder='pass' onChange={(e)=>setPassword(e.target.value)}/>
//     <button onClick = {login}></button>

//     </form>

// </div>
//   )
// }

// export default Login





// import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
// import axios from 'axios'

// function Login() {
//     const [user, setUser] = useState({
//         email:'', password: ''
//     })

//     const onChangeInput = e =>{
//         const {name, value} = e.target;
//         setUser({...user, [name]:value})
//     }

//     const loginSubmit = async e =>{
//         e.preventDefault()
// let payload = { email:"abc@gmail.com",password:"123344"}
// axios.post('http://18.232.16.231/adeptlaws/index.php/api/admin-login', 
//   payload
   
//   )
//   .then(function (response) {
//     alert("vjdj");
//   })  
//   .catch(function (error) {
//     alert(error.status);
//   });
//         try {
//             await axios.post('http://18.232.16.231/adeptlaws/index.php/api/admin-login', {...user})
//             localStorage.setItem('firstLogin', true)
            
//             window.location.href = "/app";


//         } catch (err) {
//             console.log(err.response.data.msg)
//         }
//     }

//     return (
//         <div className="login-page">
//             <form onSubmit={loginSubmit}>
//                 <h2>Login</h2>
//                 <input type="email" name="email" 
//                 placeholder="Email" value={user.email} onChange={onChangeInput} />

//                 <input type="password" name="password"  autoComplete="on"
//                 placeholder="Password" value={user.password} onChange={onChangeInput} />

//                 <div className="row">
//                     <button type="submit">Login</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Login








