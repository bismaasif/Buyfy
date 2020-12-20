import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Category from './Pages/Category/Category';
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts';
import Checkout from './Pages/Checkout/Checkout';
import Authentication from './Pages/Authentication/Authetication';

function App() {
  return (
   
   <Switch>
     
     <Route path="/" component={Home} exact/>
     <Route path="/Category" component={Category} exact/>
     <Route path="/categoryproducts" component={CategoryProducts} exact/>
     <Route path="/checkout" component={Checkout} exact/>
     <Route path="/authentication" component={Authentication} exact/>


   </Switch>
   
  );
}

export default App;
