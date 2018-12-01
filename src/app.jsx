import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './components/menu/menu';
import Home from './components/home/home';
import Topic from './components/topic/topic';
import Login from './components/login/login';
import Signup from './components/signup/signup';

import topicStore from './stores/topicStore';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Menu />
    </header>
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Home {...props} store={topicStore} />}
      />
      <Route
        exact
        path="/topic"
        render={props => <Topic {...props} store={topicStore} />}
      />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </div>
);

export default App;
