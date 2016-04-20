var moduleServ = require('express-module-serv');

module.exports = function loadModule(app, params) {
	console.log('loadModule is working');
	moduleServ(app, {
	  routePath: '/m', //default 
	  loaderPath: '/mloader.js', //default
	  pathSettings: {
	    // requried
			base: __dirname + '/scripts'
	  }
});
};
