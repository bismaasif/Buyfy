import React, { useState } from 'react'
const Signupform=()=>{

    var [Fullname, setFullname]=useState("");
    var [Email, setEmail]=useState("");
    var [Password, setPassword]=useState("");
    var formsubmit=(e)=>{
        e.preventDefault();
        console.log(Fullname)
        console.log(Email)
        console.log(Password)
    }
    return(
        <>
        <form onSubmit={formsubmit}>
            <input value={Fullname} onChange={(e)=> setFullname(e.target.value)} type="text" placeholder="Fullname"/>
            <input value={Email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Email"/>
            <input value={Password} onChange={(e)=> setPassword(e.target.value)} type="text" placeholder="Password"/>
            <button type="submit">submit</button>
        </form>
        </>
    )
}
export default Signupform;