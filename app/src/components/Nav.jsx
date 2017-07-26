var React = require('react');
var { Link, IndexLink } = require('react-router');

module.exports = (props) => {
    return (
        <div>
            <h2>Navigation Component</h2>
            <IndexLink to="/" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
            <Link to="/examples" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            <Link to="/about" activeStyle={{fontWeight: 'bold'}}>About</Link>
        </div>
    )    
};
