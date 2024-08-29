import React, { useState } from 'react';
import './Loginsignup.css';

const Loginsignup = () => {
  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:"",
  })
  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async () =>{
    console.log("login executed",formData); let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }

  }
  const signup = async () =>{
    console.log("signup executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  /*const handleToggle = () => {
    setState((prevState) => (prevState === "Login" ? "Sign Up" : "Login"));
  };*/

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your name' />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}} >Continue</button>
        {state === "Sign Up" ? (
          <>
            <p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>
            <div className="loginsignup-agree">
              <input type="checkbox" id='terms' />
              <label htmlFor='terms'>
                By continuing, I agree to all the terms and conditions
              </label>
            </div>
          </>
        ) : (
          <p className='loginsignup-login'>Don't have an account? <span onClick={()=>{setState("Sign Up")}}>Sign Up Here</span></p>
        )}
      </div>
    </div>
  );
}

export default Loginsignup;
