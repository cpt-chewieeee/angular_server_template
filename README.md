#	Quick Express server + Angular with sass client

###	Tools needed:
	*	> npm install -g bower
	* 	> npm install -g nodemon
	* 	> npm install -g grunt
	*	> npm install -g express
	*	> npm install -g yo
	*	> npm install -g generator-angular


### Client side
	
	> npm install
	> bower install [--allow-root]
	> grunt serve

##### Why Grunt: 
	1.	The Grunt Server handles keeping SASS compass live for you, compiling SASS into css, adding in Angular and Bower components in a Rudy-Rails-Style, and building out your optimized production server
	2.	Forces you to keep your REST service available for future possiblities


### Server side
	
	> npm install
	> npm test <development mode>
	> npm start <production mode: displaying content located in server/dist>


### Add Route
	
	> cd client/
	> yo angular:route PATH_DIR

#### To Do:

	1. set up server side logger
	2. server side config file
	3. mongodb config file and connection