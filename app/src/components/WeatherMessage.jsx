var React = require('react');

module.exports = ({location, temp}) => {
    return (
        <p>It's {temp} in {location}</p>
    );
};
