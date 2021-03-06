import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'

const App = (props) => {

  return (
    <BrowserRouter>

      <Nav />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contacts' component={Contacts} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;