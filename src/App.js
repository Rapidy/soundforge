import React from 'react';
import { createBrowserHistory } from "history";
import { BrowserRouter, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import './sass/App.sass';

import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';
import Home from './Components/Home';

function App() {

  const customHistory = createBrowserHistory();
  const [cookies, setCookie] = useCookies();

  const onCheckCookies = () => {
    setCookie('apiToken', 'no', { path: '/' });
    // return( <Router history={customHistory.push('/login')}/> );
  }

  if (cookies.apiToken === undefined || cookies.apiToken === 'no') {
      onCheckCookies();
  } 

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Home}/>	
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={LogIn}/>
      </div>
    </BrowserRouter>  
  );
}

export default App;
