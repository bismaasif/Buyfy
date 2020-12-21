import React ,{useState}from 'react'
const Signinform=()=>{

    var [Email, setEmail]=useState("");
    var [Password, setPassword]=useState("");
    var formsubmit=(e)=>{
        e.preventDefault();
        console.log(Email)
        console.log(Password)
    }
    return(
        <>
        <form onSubmit={formsubmit}>
            <input value={Email} onChange={(e)=> {setEmail(e.target.value)}} type="email" placeholder="Email"/>
            <input value={Password} onChange={(e)=> {setPassword(e.target.value)}} type="text" placeholder="Password"/>
            <button type="submit">submit</button>
        </form>


        </>
    )
}

export default Signinform;