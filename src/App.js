import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { useCookies } from 'react-cookie';

import './sass/App.sass';

import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';
import Home from './Components/Home';

function App() {

  const [cookies, setCookie] = useCookies();

  const onCheckCookies = () => {
    setCookie('apiToken', 'no', { path: '/' });
  }

  return (
    <BrowserRouter>
      <div className="App">
      { cookies.apiToken === undefined ? onCheckCookies() : null }
      { cookies.apiToken === undefined || cookies.apiToken === 'no' ? <Redirect exact from='/' to="/login"/> : null }
        <Route exact path="/" component={Home}/>	
        <Route  path="/signup" component={SignUp}/>
        <Route  path="/login" component={LogIn}/>
      </div>
    </BrowserRouter>  
  );
}

export default App;
