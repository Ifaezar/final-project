import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import Navbar from "./view/components/navbar/navbar";
import HomeScreen from "./view/screen/home/home"


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </>
  );
}

export default App;
