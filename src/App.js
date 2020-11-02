import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AppLayout from './components/AppLayout'

const App = () => {
  return (
    <Router>
      <div className="AppLayout">
        <AppLayout />
      </div>
      <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
      </div>
    </Router>
  );
};

export default App;
