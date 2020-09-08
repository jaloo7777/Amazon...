import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Header from './header/Header'
import Checkout from './checkout/Checkout'
import Home from './home/Home'
function App() {
  return (
    <div className="App">
     <Router >
       <Switch>
         <Route path='/signIn' />
         <Route path='/checkout' >
           <Header/>  
           <Checkout /> 
         </Route>
         <Route path='/signIn' />
         <Route path='/' >
            <Header/>
            <Home />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
