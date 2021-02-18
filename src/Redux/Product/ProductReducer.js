import { product_set } from "./Productconstants";

var initialstate=[];
var ProductReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch (type) {
      case product_set:
          return [...payload.products]
       
        
     default:
      return state;
    }
}
export default ProductReducer;