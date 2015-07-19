/**
 *	Middleware pattern, it can be considered the Node.js 
 *	incarnation of the Intercepting Filter pattern 
 *	and the Chain of Responsibility pattern.
 */

function init () {

	function app () {

		app.handle();
	}

	app.stack = [];

	app.use = function (fn) {

		app.stack.push(fn);
	};

	app.handle = function () {

		var index = 0;

		function next () {

			var layer = app.stack[index++];

			layer ? layer(next) : "";
		}

		next();
	};
	
	return app;
}

var myApp = init();

myApp.use(function one (next){

	setTimeout(function (){

		console.log("Function one done!");
		next(); 
	}, 500);
});

myApp.use(function two (next){

	setTimeout(function (){

		console.log("Function two done!");
		next(); 
	}, 500);
});

myApp();