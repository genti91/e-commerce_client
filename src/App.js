import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from "./Components/Footer/Footer";
import ProductDetails from './Components/ProductDetails/ProductDetails';
import NavBar from './Components/NavBar/NavBar';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import CreateUser from './Components/CreateUser/CreateUser';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import PostGame from './Components/Admin/src/CreateGame/CreateGame';
import MyStore from './Components/MyStore/MyStore';
import Account from './Components/Account/Account';
import WishList from "./Components/WishList/WishList.jsx";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import About from './Components/About/About.jsx'
import Pasarela from "./Components/Checkout/Checkout";
import "react-chatbot-kit/build/main.css"
import Admin from './Components/Admin/Admin';

import { useSelector } from 'react-redux';
import Checkout from './Components/Checkout/Checkout';
import Verify from './Components/Verify/Verify.jsx';
import VerifyAuth from './Components/Verify/VerifyAuth';
import Success from './Components/SuccessfulPurchase/Success';

import Restore from './Components/Restore/Restore';
import ChangePass from './Components/ChangePass/ChangePass';

import Chatbot from 'react-chatbot-kit';




function App() {
let users = useSelector(state=>state.users);
  return (
    <>
    <div className="App">
        <div className='background'>
          <div className='ball1'/>
          <div className='ball2'/>
          <div className='gloss'/> 
        </div>
        <Route path="/" component={NavBar}/>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/detail/:id" component={ProductDetails} />
        <Route path="/shopping_cart" component={ShoppingCart} />
        <Route path="/my_store" component={MyStore} />
        <Route path="/about" component={About} />
        <Route path="/create_user"component={CreateUser} />
        <Route path="/wish_list" component={WishList}/>
        <Route path="/account" component={Account}/>
        <Route path="/login" component={Login} />
        <Route path="/restore" component={Restore} />
        <Route path="/changepass/:id/:token" component={ChangePass} />
        <Route path="/home" component={Home} />
        {/* { users.user && <Route path="/userprofile" component={UserProfile} /> } */}
        <Route path="/userprofile" component={UserProfile} /> 
        <Route path="/admin/create" component={PostGame}/>
        <Route path="/verify/:email" component={Verify} />
        <Route path="/oauth2/:token" component={VerifyAuth} />
        <Route path="/oauth2/" component={VerifyAuth} />
        <Route path="/success" component={Success} />
        {/* <Route path="/checkout/:id" component={Checkout}/> */}
        { users && users.user && users.user.isAdmin ? <Route path="/admin" component={Admin}/> : null }
        <Route path="*" component={NotFound}/>
        </Switch>
        <div className='footer'>
        <Footer />
        </div>
    </div>
    </>
  );
}

export default App;
