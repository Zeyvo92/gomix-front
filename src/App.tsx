import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
