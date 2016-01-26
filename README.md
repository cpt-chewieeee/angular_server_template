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


### Start DB
	
	> mongod --dbpath server/data/db/ --logpath server/data/logs/mongodb.log --logappend
	> verify: mongo

#### To Do:
	
	1. set up server side logger (done)
	2. server side config file (done)
	3. mongodb config file and connection (done)
	4. set up intro pages (home, login, etc)(done)

--------------------------------------------------------------------
# NOTES

to run the server in https:
	1. change config file
	2. create certificate with openssl  
		> example: openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
		> to remove the password: openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem
	3. add the certificate to chrome (if your using it). [Im using firefox developer edition]