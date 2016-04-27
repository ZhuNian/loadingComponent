var moduleServ = require('express-module-serv');
var path = require('path');
var cmdWrapper = require('express-module-serv/transformers/cmd-wrapper');
var cssWrapper = require('express-module-serv/transformers/css-wrapper');
var addComma = require('express-module-serv/transformers/add-comma');

module.exports = function loadModule(app, params) {
	console.log('loadModule is working');
	var transformers = [
		cssWrapper(),
		cmdWrapper(),
		addComma()
	];
	params.transformers = transformers;

	moduleServ(app, {
	  routePath: params.routePath,
	  loaderPath: params.loaderPath,
	  pathSettings: {
			base:  path.resolve(__dirname, params.pathSettings.base),
			paths: params.pathSettings.paths
	  },
		transformers: params.transformers
});
};
