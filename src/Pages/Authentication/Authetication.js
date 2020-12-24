import React from 'react'
import Googlesigninbtn from '../../Component/Googlesigninbtn/Googlesigninbtn'
import Signinform from '../../Component/Signinform/Signinform'
import Signout from '../../Component/Signout/Signout'
import Signupform from '../../Component/Signupform/Signupform'
const Authentication=()=>{
    return(
        <>
        
        <Signupform/>
        <Signinform/>
        <Signout/>
        <Googlesigninbtn/>

        
        </>
    )
}
export default Authentication;