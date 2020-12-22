import React, { useState } from 'react'
import {signup} from './../../Redux/auth/authActions'
import {connect} from 'react-redux'
const Signupform=({signup})=>{

    var [Fullname, setFullname]=useState("");
    var [Email, setEmail]=useState("");
    var [Password, setPassword]=useState("");
    var formsubmit=(e)=>{
        e.preventDefault();

        var cred={
            Fullname,Email,Password
        }
        signup(cred)
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
var actions={
    signup
}
export default connect(null,actions)(Signupform);