import React, { Component } from 'react';
import Footersection from './UI_Components/Footersection/Footersection';

import { Route} from 'react-router-dom';
import Login  from './components/Login/Login';
import Layout from './UI_Components/Layout/Layout';
import Registration from './components/Registration/Registration'
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
       <Layout/> 
      <Route path="/" exact component={Login} />
      <Route path="/Registration"  component={Registration} />
      <Route path="/Home"  component={Home} />
      <Route path="/Policy"  component={Home} />
       <Footersection/> 
      </div>
      
      
    );
  }
}

export default App;
