var moduleServ = require('express-module-serv');
var path = require('path');

module.exports = function loadModule(app, params) {
	console.log('loadModule is working');
	moduleServ(app, {
	  routePath: '/m', //default 
	  loaderPath: '/mloader.js', //default
	  pathSettings: {
	    // requried
			base:  path.join(__dirname, '../public/scripts')
	  }
});
};
