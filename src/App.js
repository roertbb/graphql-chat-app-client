import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import Users from './pages/Users';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
          <Route path="/users/" component={Users} />
          <Route path="/" exact component={Chat} />
        </Switch>
      </Router>
    );
  }
}

export default App;
