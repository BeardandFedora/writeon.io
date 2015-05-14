require('nodetime');
//require('newrelic');
var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var app = express();

/* this is used to force SSL - required for security */
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] != 'http') {
        res.redirect('https://' + req.headers.host + req.path);
    }
    else {
        return next();
    }
});

/* a badass prerender engine for Angular apps - prerender.io style */
app.use(require('prerender-node').set('prerenderToken', 'Rkc1v2erHMhjziNu5gbC'));

/* ****************************************************
 * The below is some badass express based router 
 * middleware (rewrites) for html5Mode angular apps - 
 * Fedora style 
 * ****************************************************
*/
app.use(serveStatic(__dirname + '/dist'));

/* ******* The Variant Landing Pages ******* */
// For each new page to launch, you must configure it 
// below with a new app.get(...)
// 
app.set('variants', __dirname + '/dist/variants');
app.get('/for/travel-writers', function(req, res, next) {
    res.sendFile('travel-writers.html', { root: __dirname + "/dist/variants"});
});
app.get('/for/ebook-authors', function(req, res, next) {
    res.sendFile('ebook-authors.html', { root: __dirname + "/dist/variants"});
});



/* ******* The Angular Ap Router ******* */
// Leave this alone if you value your 
// job and a working website
// 
app.set('views', __dirname + '/dist/views');
app.get('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + "/dist"});
});

app.use(morgan('app'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
var port = process.env.PORT || 5000;
	app.listen(port, null, function() {
		console.log('Server started: http://localhost:' + port);
	});