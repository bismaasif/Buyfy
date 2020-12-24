import React from 'react'
import { connect } from 'react-redux';
import {signinwithgoogle} from './../../Redux/auth/authActions';
const Googlesigninbtn=({signinwithgoogle})=>{
    return(
        <>
        <button onClick={signinwithgoogle}>sign in with google</button>
        </>
    )
}
var actions={
    signinwithgoogle
}
export default connect(null,actions)(Googlesigninbtn);