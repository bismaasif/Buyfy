import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer';
import thunk from 'redux-thunk';
var middleware=[thunk];
const Store = createStore(RootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
 
));
export default Store;