var express = require('express');

var app = express();

app.use(express.static('dist'));

var server = app.listen(process.env.PORT || process.argv[2] || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('no-go app listening on http://%s:%s', host, port);
});
