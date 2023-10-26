
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes}  from  'react-router-dom';
import {Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Checkout from './component/Checkout';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Register from './component/Register';
import AlertError from './component/Alerterror';
import Login from './component/Login';
import Success from './component/Sucess';
import Cancel from './component/Cancel';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <AlertError/>
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/products' Component={Products}/>
    <Route exact path='/products/:id' Component={Product}/>
    <Route exact path="/cart" Component={Cart} />
    <Route exact path="/checkout" Component={Checkout} />
    <Route exact path="/about" Component={About} />
    <Route exact path="/contact" Component={Contact} />
    <Route exact path="/register" Component={Register} />
    <Route exact path="/login" Component={Login} />
    <Route exact path="/success" Component={Success} />
    <Route exact path="/cancel" Component={Cancel} />
   
    </Routes>
    <Footer/>
   
    </>
  );
}
export default App;
