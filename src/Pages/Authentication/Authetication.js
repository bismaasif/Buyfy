import React from 'react'
import Signinform from '../../Component/Signinform/Signinform'
import Signout from '../../Component/Signout/Signout'
import Signupform from '../../Component/Signupform/Signupform'
const Authentication=()=>{
    return(
        <>
        
        <Signupform/>
        <Signinform/>
        <Signout/>

        
        </>
    )
}
export default Authentication;