var React = require('react');
var ReactDom = require('react-dom');
var { Router, Route, IndexRoute, hashHistory } = require('react-router');
var Main = require('./components/Main');
var Weather = require('./components/Weather');
var Examples = require('./components/Examples');
var About = require('./components/About');

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <Route path="examples" component={Examples}/>
            <Route path="about" component={About}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
