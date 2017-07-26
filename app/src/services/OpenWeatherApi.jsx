var axios = require('axios');

module.exports = {
    getTemperature: function(location){
        const OPEN_WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?appid=bc43b722f267c5a73905c39803657072&units=metric';
        var encodedLocation = encodeURI(location);
        var url = `${OPEN_WEATHER_API}&q=${encodedLocation}`;
        return axios.get(url).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                throw new Error(`${res.status}: ${res.statusText}`);
            }
        });        
    }
}