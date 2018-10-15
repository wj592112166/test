import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './views/Home'
import Summary from './views/summary';
import Shop from './views/shop'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
      	<Home>
      	 <Route path="/" exact component={Summary} />
      	 <Route path="/shop" component={Shop} />
      	</Home>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
