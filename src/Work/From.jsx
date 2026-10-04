import { useState } from "react"; 

import "./From.css"


function Fadhe() { 
 const [name, setName] = useState("");
const [age, setAge] = useState(""); 
 const [gmail, setGmail] = useState(""); 
 const [password, setPassword] = useState("");


 

 return ( 
 <div className="ui"> 
 <h1>Student Form</h1> 
 <input 
 type="text" 
 value={name} 
 onChange={(e) => setName(e.target.value)}  placeholder="Enter your name" 
 /> 
 <h2>Your Name: {name}</h2> 

 

 <input 
 type="Number" 
 value={age} 
 onChange={(age) => setAge(age.target.value)}  placeholder="Enter your Age" 
 /> 
 <h2>Your Age: {age}</h2> 



 <input 
 type="Email" 
 value={gmail} 
 onChange={(gmail) => setGmail(gmail.target.value)}  placeholder="Enter your gmail" 
 /> 
 <h2>Your gmail: {gmail}</h2> 


 <input 
 type="password" 
 value={password} 
 onChange={(password) => setPassword(password.target.value)}  placeholder="Enter your password" 
 /> 
 

 </div> 


 ); 
} 
export default Fadhe;