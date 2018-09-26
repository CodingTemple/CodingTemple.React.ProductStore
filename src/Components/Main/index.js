import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Cart from '../Cart';

export default class Main extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/cart" component={Cart}></Route>
      </Switch>
    );
  }
}