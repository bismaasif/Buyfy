import React ,{useState}from 'react'
import { connect } from 'react-redux';
import {signin} from './../../Redux/auth/authActions';
const Signinform=({signin})=>{

    var [Email, setEmail]=useState("");
    var [Password, setPassword]=useState("");
    var formsubmit=(e)=>{
        e.preventDefault();
        var cred={
        
            Email,Password
        }
        signin(cred)
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
var actions={
    signin
}
export default connect(null,actions)(Signinform);