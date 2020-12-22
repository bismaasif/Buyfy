import { Remove_user, Set_user } from "./authConstants";

var initialstate=null;
var authReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch (type) {
      case Set_user:
        return payload.user
      case Remove_user:
        return null
     default:
      return state;
    }
}
export default authReducer;