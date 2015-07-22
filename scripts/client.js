import React from 'react';
import Router, {Route, RouteHandler} from 'react-router';

import HelloWorld from '../components/hello-world.react';

import 'bootstrap/dist/css/bootstrap.min.css';

var App = React.createClass({
    render () {
        return (
            <div className="container">
                <RouteHandler/>
            </div>
        );
    }
});

var routes = (
  <Route handler={App}>
    <Route path="" handler={HelloWorld}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
