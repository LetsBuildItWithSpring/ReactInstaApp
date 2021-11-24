import { useState } from 'react';
import './signUp.css';

const SignUp=()=>{

    const [signUpForm, setsignUpForm] = useState({
        email: '',
        fullname: '',
        username:'',
        password:''

    });

    const handleUser = (event, property) => {
        const tempSignUpForm = { ...signUpForm };
        const { currentTarget: {value} } = event;
        tempSignUpForm[property] = value;
        setsignUpForm(tempSignUpForm);
    }

    const signUpUser=()=>{
    
    if(signUpForm.email && signUpForm.fullname && signUpForm.username && signUpForm.password){
        alert('sign up');
    }else{
        alert("Pls provide all details");
    }
    }

    return <>
    <div className="SignupContainer">
        <tbody>
            <tr>
                <td><input onChange={(event) => {handleUser(event, 'email')}} placeholder="Mobile number or Email" type="text"/></td>
            </tr>
            <tr>
                <td><input onChange={(event) => {handleUser(event, 'fullname')}} placeholder="Full Name" type="text"/></td>
            </tr>
            <tr>
                <td><input onChange={(event) => {handleUser(event, 'username')}} placeholder="Username" type="text"/></td>
            </tr>
            <tr>
                <td><input onChange={(event) => {handleUser(event, 'password')}} placeholder="Password" type="password"/></td>
            </tr>
            <tr>
                <td><button onClick={signUpUser}>Sign up</button></td>
            </tr>
        </tbody>
    </div>
    </>
}

export default SignUp;