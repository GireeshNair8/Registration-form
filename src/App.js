import './App.css';
import React, { useState } from "react";
function App() {
  const[inputs, setInputs]=useState({
    username:'',
    email:'',
    password:'',
    cpassword:''
})

const[focus,setFocus]=useState({errName:false, errEmail:false, errPass:false, errCpass:false})
const handleSubmit=(e)=>{
e.preventDefault()
if(inputs.username && inputs.email && inputs.password && inputs.cpassword){
  alert(` User Registered, \n Name: ${inputs.username} \n Email: ${inputs.email}`)
}
}
const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setInputs({...inputs,[name]:value})
}
return(
<div className="container col-5 p-4">
<h1 style={{textAlign:'center'}}>Registration Form</h1>
<form onSubmit={handleSubmit}>
<div className="form-group py-3">
<label htmlFor="username">Username</label>
<input name='username' value={inputs.username} onChange={handleChange} onBlur={()=>setFocus({...focus, errName:true})} focus={focus.errName.toString()} required type="type" pattern="^[A-Za-z0-9].{2,16}" className="form-control" id="name" placeholder="Username" />
<span>Username should have 3-16 characters</span>
</div>
<div className="form-group py-3">
<label htmlFor="email">Email</label>
<input name='email' value={inputs.email} onChange={handleChange} onBlur={()=>setFocus({...focus, errEmail:true})} focus={focus.errEmail.toString()} required type="email" className="form-control" id="email" placeholder="Email ID" />
<span>Enter a valid Email ID</span>
</div>
<div className="form-group py-3">
<label for="password">Password</label>
<input name='password' value={inputs.password} onChange={handleChange} onBlur={()=>setFocus({...focus, errPass:true})} focus={focus.errPass.toString()} required type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$" className="form-control" id="password" placeholder="Password" />
<span>Password must have minimum 8 characters and include atleast 1 uppercase, 1 digit and 1 special character</span>
</div>
<div className="form-group py-3">
<label for="cpassword">Confirm Password</label>
<input name='cpassword' value={inputs.cpassword} onChange={handleChange} onBlur={()=>setFocus({...focus, errCpass:true})} focus={focus.errCpass.toString()} required type="password" pattern={inputs.password} className="form-control" id="cpassword" placeholder="Confirm Password" />
<span>Password is not matching</span>
</div>
<div class="btn"><button type="submit" className="btn bg-dark">Register</button></div>
</form>
</div>
);
}
 

export default App;
