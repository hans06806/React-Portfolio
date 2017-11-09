import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, hashHistory} from 'react-router';
import Home from './containers/Home';
import App from './containers/App';
import Projects from './containers/Projects';
import About from './containers/About';

Router.prototype.componentWillReceiveProps = function(nextProps) {
  let components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  grabComponents(nextProps.routes || nextProps.children);
  components.forEach(React.createElement); // force patching
};

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/Projects" component={Projects} />
      <Route path="/About" componet={About} />
    </Route>
  </Router>
);
