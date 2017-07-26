var express = require('express');
var app = express();
app.set('port', 3000);
app.use(express.static(__dirname + '/public'));
app.listen(app.get('port'), function() {
    console.log('Server is up and running on port 3000');
});
