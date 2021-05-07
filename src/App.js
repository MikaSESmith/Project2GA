import React from 'react';
import "./App.css";
import "./index.css";
import Navbar from './components/Header';

import TopStories from './components/Categories/TopStories'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Newsdata from './components/data/Newsdata';
import Home from "./pages";
import About from "./pages/about";
import TestInfo from './components/random quote/TestInfo'


const App = () => {
  return (
    <Router>
      < Navbar />
     
      < TopStories /> 
      <TestInfo />
      < Newsdata />
      
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        </Switch>

    </Router>
  )
}

export default App
