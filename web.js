require('nodetime');
require('newrelic');
var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
/* this is used to force SSL - required for security */
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] != 'https') {
        res.redirect('https://' + req.headers.host + req.path);
    }
    else {
        return next();
    }
});

/* express based router middleware (rewrites) - no worky with this crappy yeo app config :(
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + "/app"});
});
*/

app.use(morgan('app'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);