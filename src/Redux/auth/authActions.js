import { auth, firestore, Googleauthprovider, serverTimestamp } from "../../Firebase/Firebase"
import { Remove_user, Set_user } from "./authConstants";
import firebase from "../../Firebase/Firebase";



export var removeuser=()=>({
    type:Remove_user,
    
});
export var Setuser=(user)=>({
    type:Set_user,
    payload:{
        user,
    }
});
export var signup=({Email,Password,Fullname})=> async(dispatch)=>{
try {
    //create user on firebase auth section
 var {user:{uid}}= await auth.createUserWithEmailAndPassword(Email,Password)

    //save user's info to firestore
         var userinfo={
         Fullname,
         Email,
         createdAt:serverTimestamp()
     }
    // console.log(userinfo)
    
    await firestore.collection("users").doc(uid).set(userinfo)

    //console.log(user)
    //settting up redux state
    var userforstate={
        Fullname,
        Email,
        uid
    }
  dispatch(Setuser(userforstate))
} catch (error) {
    console.log(error.message)
}
}
export var signin=({Email,Password})=>async(dispatch)=>{
try {
   
    //signin user with auth
    var {user:{uid}}=await auth.signInWithEmailAndPassword(Email,Password)
   // console.log(user)

    //fetch user data from firestore
    var userdata = await firestore.collection("users").doc(uid).get()
    //console.log(userdata.data())
    var {Fullname,Email:emailuser}=userdata.data()
    //set user data to auth state
  var userforstate1={
      
     Fullname,
      emailuser,
      uid,
  };
  dispatch(Setuser(userforstate1));

} catch (error) {
    console.log(error)
}

}

export var signout=()=>async(dispatch)=>{
    try {
        //signout user from firebase auth
        await auth.signOut();
        //set user state to null
       // dispatch(removeuser())
    } catch (error) {
        console.log(error)
        
    }

}
export var signinwithgoogle=()=>async(dispatch)=>{
    try {
        //sign in user in firebase with auth (google)
        var {user:{displayName,email,uid},additionalUserInfo:{isNewUser}}= await auth.signInWithPopup(Googleauthprovider)
        if(isNewUser){
            
    //save user's info to firestore
         var userinfo={
            Fullname:displayName,
            Email:email,
            createdAt:serverTimestamp()
        }
       // console.log(userinfo)
       
       await firestore.collection("users").doc(uid).set(userinfo);
}
  //set user data to auth state
  var userforstate1={
      
    Fullname:displayName,
     Email:email,
     uid,
 };
    dispatch(Setuser(userforstate1))

    } catch (error) {
        console.log(error)
        
    }
}
export var checkauthstatus=()=>async(dispatch)=>{
    try {
      //  var user= auth.onAuthStateChanged();
      //  console.log(user)
      firebase.auth().onAuthStateChanged(async function(user)
      {
          if (user){
            var {uid}=user;
               //fetch user data from firestore
    var userdata = await firestore.collection("users").doc(uid).get()
    var {Fullname,Email}=userdata.data();
    //settting up redux state
    var userforstate={
        Fullname,
        Email,
        uid
    }
  dispatch(Setuser(userforstate))


          }
          else{
            //set user state to null
        dispatch(removeuser())
          }
      })
    } catch (error) {
        console.log(error)
        
    }
}