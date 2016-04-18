var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var hbs  = require('express-hbs');

var app = express();
var ROOT_DIR = __dirname;
var boot = require('express-app-boot')(ROOT_DIR);
var PORT = 3000;

app.use(express.static('public'));
boot(app, 'boot');

var loadCom = require('./routes/loadCom');
var users = require('./routes/users');
var index = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.express3());

app.use(loadCom);
//app.use('/index', index);
app.use('/users', users);

if(require.main === module) {
    app.start(function(app) {
        app.listen(PORT, function(){
            console.log('starting');    
        });        
    })
}else{
    module.export = app;
}
