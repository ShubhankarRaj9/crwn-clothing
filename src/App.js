import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop-page/shop.component.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser :null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = 
    auth.onAuthStateChanged(async(userAuth)=>{
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            });
        }); 
      }
        this.setState({currentUser:userAuth});
    });
  } 
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render() {
    return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
          <Route  path='/' Component={HomePage} />
          <Route  path='/shop' Component={ShopPage} />
          <Route  path='/signin' Component={SignInAndSignUp} />
      </Routes>
      </div>
  );
  }
  
}

export default App;
