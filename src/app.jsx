import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import topicStore from './stores/topicStore';
import messageStore from './stores/messageStore';

import Menu from './components/menu/menu';
import Home from './components/home/home';
import Topic from './components/topic/topic';
import CreateTopic from './components/createTopic/createTopic';
import Login from './components/login/login';
import Signup from './components/signup/signup';

const stores = { topicStore, messageStore };

const App = () => (
  <Provider {...stores}>
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/topic" render={props => <Topic {...props} />} />
        <Route exact path="/createtopic" component={CreateTopic} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  </Provider>
);

export default App;
