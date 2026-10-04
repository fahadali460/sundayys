
import { useState } from "react";


function Eventusestate(){
    const[message,setMessage]= useState("hello");
    function changeMessage(){
        if (message === "hello") {
setMessage("This is my project")
        }
else {
setMessage("hello")
}

    }
    return(
       <div>
        <h1>{message}</h1>
        <div className="ali">

        <button onClick={changeMessage}>
            Change Messge
        </button>
       </div>
       </div>
        
    )
}
export default Eventusestate;