 var React = require('react');
 var Nav = require('./Nav');

 module.exports = (props) => {
     return (
         <div>
             <h1>Main Component</h1>
             <Nav/>
             {props.children}
        </div>
     );
 };
