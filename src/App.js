import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AppLayout from './components/AppLayout'
import Contact from './components/Contact'

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
      <div className="AppLayout">
        <AppLayout />
      </div>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      {/* bottom */}
    </HashRouter>
  );
};

export default App;
