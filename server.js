var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto'] === 'http'){
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});
app.use(express.static(__dirname + '/public'));
app.listen(app.get('port'), function() {
    console.log('Server is up and running on port', app.get('port'));
});
