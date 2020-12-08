import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./home";
import AllBattlesCount from "./AllBattlesCount";

function Main() {
  return (<Router>
    <Switch>
      <Route exact path="/app/got/battles" component={Home}/>
      <Route exact path="/app/got/battlesCount" component={AllBattlesCount}/>
    </Switch>
  </Router>)
}

export default Main
