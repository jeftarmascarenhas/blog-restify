'use strict';

const RESTIFY = require('restify')
    , FS = require('fs')
    ;

let controllers = {}
  , controllers_path = process.cwd() + '/backend/controllers'
  , port = process.env.PORT || 3100
  ;

FS.readdirSync(controllers_path).forEach( (file) => {
	if(file.indexOf('.js') != -1){
		controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
	}
});

let server = RESTIFY.createServer();

server
	.use(RESTIFY.fullResponse())
    .use(RESTIFY.bodyParser());

// Aricle Start
server.post('/articles', controllers.article.createArticle);
server.get('/articles/:id', controllers.article.viewArticle);

server.get({path: '/articles/:id', version:'1.0.0'}, (req, res, net) => {
	res.send('Test: ' + req.params.id);
});


server.listen(port, () => {
	console.log('%s listing at %s, server name, server.url', port);
});