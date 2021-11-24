import React from 'react';
import './login.css';
import {useState} from 'react';
import { NavLink,BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUp from "./../SignUp";
import insta from "./insta.png";

const Login=()=>{

    const [loginForm, setloginForm] = useState({
        username: '',
        password: ''
    });

    const handleUser = (event, property) => {
        const tempLoginForm = { ...loginForm };
        const { currentTarget: {value} } = event;
        tempLoginForm[property] = value;
        setloginForm(tempLoginForm);
    }

    const logUserIn = () => {
        alert('loginForm.username....'+loginForm.username)
        if(loginForm.username && loginForm.password){
            alert('login');
        }else{
            alert("Provide valid info");
        }
    }

    return  <main>
        <aside>
            <img src={insta}></img>
        </aside>
        <section>
        
    <div>
    <h1><i><em>Instagram App</em></i></h1>
    <div className="Login-Container">
    <table>
        <tbody>
            <tr>
                <td><input onChange={(event) => {handleUser(event, 'username')}} placeholder="Phone number,username,or email" type="text"/></td>
            </tr>
            <tr>
                <td><input onChange={(event) => {handleUser(event, 'password')}} placeholder="Password" type="password"/></td>
            </tr>
            <tr>
                <td><button onClick={logUserIn}>Log In</button></td>
            </tr>
        </tbody>
    </table>

</div>
<div>
    <h5>OR</h5>
</div>
<div>
    <button>Log in with Facebook</button>
</div>
<div>
    <button>forgot password</button>
</div>
</div>
<div>
    <BrowserRouter>
    <h3>Don't have account ? <NavLink to="/SignUp">SignUp</NavLink></h3>
    <Routes><Route path="/SignUp" element={<SignUp/>}/></Routes>
    </BrowserRouter>
</div>
</section>
</main>

};



export default Login;