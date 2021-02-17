import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Category from './Pages/Category/Category';
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts';
import Checkout from './Pages/Checkout/Checkout';
import Authentication from './Pages/Authentication/Authetication';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {checkauthstatus} from './Redux/auth/authActions'
import Test from './Pages/Test/Test';

function App({checkauthstatus}) {
  useEffect(()=>
  {
//cdm
checkauthstatus()
},[])
  return (
   
   <Switch>
     
     <Route path="/" component={Home} exact/>
     <Route path="/Category" component={Category} exact/>
     <Route path="/categoryproducts" component={CategoryProducts} exact/>
     <Route path="/checkout" component={Checkout} exact/>
     <Route path="/authentication" component={Authentication} exact/>
     <Route path="/test" component={Test} exact/>


   </Switch>
   
  );
}
var actions={
  checkauthstatus
}

export default connect(null,actions)(App);
