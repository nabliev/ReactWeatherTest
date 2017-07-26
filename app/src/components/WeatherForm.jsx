var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        if(this.refs.location.value){
            var location = this.refs.location.value;
            this.refs.location.value = '';
            this.props.onGetWeather(location);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Enter location" ref="location"/>
                <button>Get Weather</button>
            </form>
        )
    }
});

module.exports = WeatherForm;

