import React from 'react'
import { connect } from 'react-redux';
import {signout} from './../../Redux/auth/authActions';
const Signout=({signout})=>{
    return(
        <>
        <button onClick={signout}>Signout</button>
        </>
    )
}
var actions={
    signout
}
export default connect(null,actions)(Signout);
