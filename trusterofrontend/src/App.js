import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


//alex
