import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { createOauthFlow } from 'react-oauth-flow';
import { Button } from 'reactstrap';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple React App For Test</h1>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch>
          <details class="dropdown">
              <summary>This has dropdown items</summary>
              <ul>
                  <li><a href="#hi">Hi</a></li>
                  <li><a href="#universe">Universe This is Kishore</a></li>
              </ul>
          </details>
          <Button color="danger">Danger!</Button>
      </div>
    </Router>
    
    );
  }
}

export default App;
