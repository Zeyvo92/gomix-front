import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Topic from './components/topic/Topic';

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/topic" component={Topic} />
        </Switch>
      </div>
    );
  }
}

export default App;
