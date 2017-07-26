var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var OpenWeatherApi = require('../services/OpenWeatherApi');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    onGetWeather: function(location){
        this.setState({
            isLoading: true
        });
        var that = this;
        OpenWeatherApi.getTemperature(location).then(
            function(temp){
                that.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                });
            },
            function(err){
                that.setState({
                    isLoading: false
                });
                alert(err);
            }
        );
    },
    render: function() {
        var {location, temp, isLoading} = this.state;
        function renderMessage() {
            if(isLoading){
                return (<p>Requesting server...</p>);
            } else if(location && temp){
                return (<WeatherMessage location={location} temp={temp}/>);
            }
        };

        return (
            <div>
                <WeatherForm onGetWeather={this.onGetWeather}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
