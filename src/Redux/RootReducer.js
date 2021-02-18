import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import ProductReducer from './Product/ProductReducer';
var RootReducer=combineReducers({
    auth:authReducer,
    products:ProductReducer
})
export default RootReducer;